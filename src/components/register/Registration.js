import React, { Component } from "react";
import { Button, Form, Grid, Image } from "semantic-ui-react";
import RegistrationManager from "./../../modules/RegistrationManager";
import Logo from "../logo/BattlebusLogo.png";
import "./Registration.css";

export default class Registration extends Component {
    // state holds the input from user
    state = {
        name: "",
        userName: "",
        password: "",
        address: ""
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    // this function takes the input from state and adds the information to the database, then sends the user to the login page
    addNewUser = () => {
        let newUserObject = {
            name: this.state.name,
            userName: this.state.userName,
            password: this.state.password,
            address: this.state.address
        };

        RegistrationManager.addNewUser(newUserObject)
            .then(this.props.history.push("/login"));
    };

    render () {
    return (
        <Grid centered columns={2} padded>
                <Grid.Row >
                </Grid.Row>
                <Grid.Row >
                </Grid.Row>
                <Grid.Row >
                </Grid.Row>
                <Grid.Column>
                    <Image src={Logo} size="large" />
                    <br />
        <div class="registration">
            <Form>
                <Form.Group width="equal">
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
                </Form.Group>
                <Form.Field>
                    <label>Address</label>
                    <input id="address" onChange={this.handleFieldChange} placeholder='Address' />
                </Form.Field>
                <Button type="button" onClick={this.addNewUser}>Submit</Button>
            </Form>
            <hr />
            Already have an account? <a href="/login">Login</a>
        </div>
        </Grid.Column>
        </Grid>
    )}
}
