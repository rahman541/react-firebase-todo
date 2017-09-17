import React, {Component} from 'react'
import './NoteForm.css'

class NoteForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			newNoteContent: ''
		}
		this.handleUserInput = this.handleUserInput.bind(this)
		this.writeNote = this.writeNote.bind(this)
	}

	handleUserInput (e) {
		console.log(e.target.value)
		this.setState({
			newNoteContent: e.target.value,
		})
	}

	writeNote () {
		this.setState({
			newNoteContent: ''
		})
	}

	render () {
		return (
			<div className="formWrapper">
				<input className="noteInput"
					placeholder="Write a note ..."
					onChange={this.handleUserInput}
					value={this.state.newNoteContent}
					/>
				<button className="noteButton" onClick={this.writeNote>
					Add Note
				</button>
			</div>
		)
	}

}

export default NoteForm