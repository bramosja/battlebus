import React, { Component } from 'react';

export default class NotesForm extends Component {
    state = {
        politician: "",
        content: ""
    }

    handleChange = (evt) => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    addNote = evt => {
        evt.preventDefault();

        let noteObject = {
            "content": this.state.content,
            "savedPoliticianId": this.state.politician
        };

        this.props.addNewNote(noteObject)
        this.props.toggleVisibility()
    }

    componentDidMount(){
        this.setState({
            politician: this.props.politicianId
        })
    }

    render() {
        return (
            // This will be the form to add a new note to a user's profile
                <div key={this.props.politicianId}>
                    <input type="textarea" id="content" onChange={this.handleChange} />
                    <button type="button" onClick={this.addNote}>Save</button>
                </div>

        )}
}