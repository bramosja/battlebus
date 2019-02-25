import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";
import "./Notes.css"

export default class NotesForm extends Component {
    // state hold the new note's input
    state = {
        politician: "",
        content: ""
    }

    handleChange = (evt) => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    // this function takes the input from state and adds it to the database upon cilcking save
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
                    <Input fluid type="textarea" id="content" className="addNote" onChange={this.handleChange} />
                    <Button type="button" onClick={this.addNote}>Save</Button>
                </div>

        )}
}