import React, { Component } from 'react';

export default class Notes extends Component {

    render() {
        return (
            // this feature with map through all of the notes for a specified politician and add them to the user's profile
            this.props.allNotes.map(note =>
                    <h5 key={note.id}>{note.content}</h5>
                )
        )}
}