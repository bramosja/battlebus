import React, { Component } from 'react';
import ProfileManager from "../../../modules/ProfileManager";
import NotesForm from "./NotesForm"
import EditNote from './EditNote';

export default class Notes extends Component {
    state = {
        notes: [],
        newNoteVisible: false,
        editClicked: false,
        divToEdit: ""
    }

    toggleVisibility = () => {
        this.setState({ visible: !this.state.newNoteVisible });
    }

    toggleEdit = (evt) => {

        evt.preventDefault();
        this.setState({
            editClicked: !this.state.editClicked,
            divToEdit: evt.target.id
        });

    }

    addNoteForm = () => {
        if(this.state.visible) {
           return (
                <NotesForm addNewNote={this.addNewNote} toggleVisibility={this.toggleVisibility} politicianId={this.props.politicianId} />
           )
        } else {
           return (this.state.notes.map(note => {
                            if(this.state.editClicked && Number(note.id) === Number(this.state.divToEdit)){
                                return (
                                    <div key={note.id}>
                                        <EditNote toggleEdit={this.toggleEdit} noteId={note.id} savedPoliticianId={this.props.politicianId} noteEditor={this.editNote} />
                                    </div>
                                )
                            } else {
                                return (
                                        <div key={note.id}>
                                            <p>
                                                {note.content}
                                                <button id={note.id} onClick={this.toggleEdit}>Edit</button>
                                            </p>
                                        </div>
                                    )
                            }}))
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

      editNote = (noteObject) => {
        ProfileManager.editNote(noteObject)
            .then( () => {
                ProfileManager.getAllSavedPoliticianNotes(this.props.politicianId)
                    .then(allNotes => {
                        this.setState({
                            notes: allNotes.notes
                        })
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