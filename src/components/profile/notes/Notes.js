import React, { Component } from 'react';

export default class Notes extends Component {

    render() {
        return (
            this.props.allNotes.map(note =>
                    <h5 key={note.id}>{note.content}</h5>
                )
        )}
}