import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'
import RegistrationManager from "./../../modules/RegistrationManager"

export default class Registration extends Component {

    state = {
            name: "",
            userName: "",
            password: "",
            address: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    addNewUser = () => {
        let newUserObject = {
            name: this.state.name,
            userName: this.state.userName,
            password: this.state.password,
            address: this.state.address
        }

        RegistrationManager.addNewUser(newUserObject)
            .then(this.props.history.push("/login"))
    }

    render () {
    return (
        <Form>
            <Form.Field>
                <label>Complete Name</label>
                <input id="name" onChange={this.handleFieldChange} placeholder='Complete Name' />
            </Form.Field>
            <Form.Field>
                <label>User Name</label>
                <input id="userName" onChange={this.handleFieldChange} placeholder='User Name' />
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input id="password" onChange={this.handleFieldChange} placeholder='User Name' />
            </Form.Field>
            <Form.Field>
                <label>Address</label>
                <input id="address" onChange={this.handleFieldChange} placeholder='Address' />
            </Form.Field>
            <Button type="button" onClick={this.addNewUser}>Submit</Button>
        </Form>
    )}
}
