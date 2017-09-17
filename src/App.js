import React, { Component } from 'react';
import './App.css';
import Note from './Note/Note'
import NoteForm from './NoteForm/NoteForm'

class App extends Component {
  constructor (props) {
    super(props)
    this.addNote = this.addNote.bind(this)
    this.state = {
      notes: [
        { id: 1, noteContent: 'Note 1' },
        { id: 2, noteContent: 'Note 2' }
      ]
    }
  }

  addNote (note) {
    const previousNote = this.state.notes
    previousNote.push({ id: previousNote.length+1, noteContent: note })
    this.setState({
      notes: previousNote
    })
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
                <Note noteContent={note.noteContent} noteId={note.id} key={note.id}/>
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
