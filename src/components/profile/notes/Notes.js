import React, { Component } from 'react';
import ProfileManager from "../../../modules/ProfileManager";
import NotesForm from "./NotesForm"
import EditNote from './EditNote';
import { Button } from 'semantic-ui-react'

export default class Notes extends Component {
    state = {
        notes: [],
        newNoteVisible: false,
        editClicked: false,
        divToEdit: ""
    }

    // checks to see whether the add new note button has been clicked, and removes other elements if so
    toggleVisibility = () => {
        this.setState({ newNoteVisible: !this.state.newNoteVisible });
    }

    // checks to see if the edit button has been clicked and hides existing note and sets state to indicate which note will be edited
    toggleEdit = (evt) => {

        evt.preventDefault();
        this.setState({
            editClicked: !this.state.editClicked,
            divToEdit: evt.target.id
        });

    }

    // this function toggles the buttons, and what displays in the notes section when the add note or edit note buttons are clicked
    addNoteForm = () => {
        console.log(this.state.editClicked)
        // if the add button has been clicked, the notes form displays so that the user can add a new note
        if(this.state.newNoteVisible) {
           return (
                <NotesForm addNewNote={this.addNewNote} toggleVisibility={this.toggleVisibility} politicianId={this.props.politicianId} />
           )
        } else {
            // if the add button has not been clicked the user is presented with the existing note contents
           return (this.state.notes.map(note => {
                            // if the edit button has been clicked, the existing information in that edit field is replaced with an input field
                            if(this.state.editClicked && Number(note.id) === Number(this.state.divToEdit)){
                                return (
                                    <div key={note.id}>
                                        <EditNote toggleEdit={this.toggleEdit} noteId={note.id} savedPoliticianId={this.props.politicianId} noteEditor={this.editNote} noteContent={note.content} removeNote={this.deleteNote} />
                                    </div>
                                )
                            } else {
                                // if none of the other conditions are triggered, this piece of the code returns the list of notes for each politician
                                return (
                                        <div key={note.id}>
                                            <p>
                                                {note.content}
                                                <br />
                                                <Button primary size="mini" id={note.id} onClick={this.toggleEdit}>Edit</Button>
                                            </p>
                                        </div>
                                    )
                            }}))
        }
    };

    // this function, when called, will add a new note and update the data held in state
    addNewNote = (noteObject) => {
        ProfileManager.addNewNote(noteObject)
          .then( () => {
                ProfileManager.getAllSavedPoliticianNotes(this.props.politicianId)
                    .then(allNotes => {
                        this.setState({
                            notes: allNotes.notes
                        })
            })
        })
      }
    // this function, when called, will edit a note and update the data held in state
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
    // this function, when called, will delete a note and update the data held in state
    deleteNote = (id) => {
        ProfileManager.deleteNote(id)
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
            <React.Fragment>
                {this.addNoteForm()}
                <Button type="button" onClick={this.toggleVisibility}>Add Note</Button>
            </React.Fragment>

        )}
}