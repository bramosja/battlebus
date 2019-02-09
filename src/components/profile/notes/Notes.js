import React, { Component } from 'react';
import ProfileManager from "../../../modules/ProfileManager";
import NotesForm from "./NotesForm"

export default class Notes extends Component {
    state = {
        notes: [],
        newNoteVisible: false,
        editClicked: false
    }

    toggleVisibility = () => {
        this.setState({ visible: !this.state.newNoteVisible });
    }

    toggleEdit = () => {
        this.setState({ editClicked: !this.state.editClicked});
    }

    addNoteForm = () => {
        if(this.state.visible) {
           return (
                <NotesForm addNewNote={this.addNewNote} toggleVisibility={this.toggleVisibility} politicianId={this.props.politicianId} />
           )
        } else {
            return (
                this.state.notes.map(note =>
                    <p key={note.id}>
                        {note.content}
                        <button>Edit</button>
                    </p>
                    )
            )
        }
    };

    addNewNote = (noteObject) => {
        ProfileManager.addNewNote(noteObject)
          .then( () => {
                ProfileManager.getAllSavedPoliticianNotes(this.props.politicianId)
                    .then(allNotes => {
                        this.setState({
                            notes: allNotes.notes
                        })
                this.toggleVisibility();
            })


        })
      }

    componentDidMount(){
        ProfileManager.getAllSavedPoliticianNotes(this.props.politicianId)
                .then(allNotes => {
                    this.setState({
                    notes: allNotes.notes
                    })
            })
    }

    render() {
        return (
            // this feature maps through all of the politician's notes to print them to the DOM
            <React.Fragment>
                {this.addNoteForm()}
                <button onClick={this.toggleVisibility}>Add Note</button>
            </React.Fragment>

        )}
}