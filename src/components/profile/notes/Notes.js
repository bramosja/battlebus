import React, { Component } from 'react';
import ProfileManager from "../../../modules/ProfileManager";

export default class Notes extends Component {
    state = {
        notes: []
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
            this.state.notes.map(note =>
                <p key={note.id}>{note.content}</p>
                )

        )}
}