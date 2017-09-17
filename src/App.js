import React, { Component } from 'react';
import './App.css';
import Note from './Note/Note'
import NoteForm from './NoteForm/NoteForm'
import { DB_CONFIG } from './Config/Config'
import firebase from 'firebase/app'
import 'firebase/database'

class App extends Component {
  constructor (props) {
    super(props)
    this.addNote = this.addNote.bind(this)
    this.removeNote = this.removeNote.bind(this)

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('notes')

    this.state = {
      notes: []
    }
  }

  componentWillMount() {
    const previousNote = this.state.notes
    this.database.on('child_added', snap => {
      previousNote.push({
        id: snap.key,
        noteContent: snap.val().noteContent
      })

      this.setState({
        notes: previousNote
      })
    })

    this.database.on('child_removed', snap => {
      for (let i=0; i<previousNote.length; i++) {
        if (previousNote[i].id === snap.key) {
          previousNote.splice(i, 1)
        }
      }
      this.setState({
        notes: previousNote
      })
    })
  }

  addNote (note) {
    this.database.push().set({ noteContent: note })
  }

  removeNote (noteId) {
    this.database.child(noteId).remove()
  }

  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">React &amp; Firebase To Do List</div>
        </div>
        <div className="notesBody">
          {
            this.state.notes.map((note) => {
              return (
                <Note
                  noteContent={note.noteContent}
                  noteId={note.id}
                  key={note.id}
                  removeNote={this.removeNote}
                />
              )
            })
          }
        </div>

        <div className="notesFooter">
          <NoteForm addNote={this.addNote} />
        </div>
        
      </div>
    );
  }
}

export default App;
