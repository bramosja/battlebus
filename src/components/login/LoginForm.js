import React, { Component } from 'react';
import LoginManager from "../../modules/LoginManager"


export default class LoginForm extends Component {
    state = {
        userName: "",
        password: "",
        user: []
    }

    // track changes to the input fields and update state accordingly
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    // checks that the user has entered an existing username and corresponding password, and then sets session storage for that user
    handleLogin = e => {
        e.preventDefault();

         // Check the user input against the database and then, if found, set the state as the found user
        LoginManager.findUser(this.state.userName, this.state.password)
            .then(foundUser => {
                console.log("lf =>", foundUser)
                this.setState({
                    user: foundUser
                })
                sessionStorage.setItem("user", foundUser[0].id);
                this.props.history.push("/profile")
            })
    }

    render() {
        return(
            <form onSubmit={this.handleLogin}>
                <label>
                    User Name:
                </label>
                <input
                    onChange={this.handleFieldChange}
                    id="userName"
                    required
                    autoFocus
                />
                <label>
                    Password:
                </label>
                <input
                    onChange={this.handleFieldChange}
                    type="password"
                    id="password"
                    required
                />
                <br />
                <button type="submit">Log In</button>
            </form>
        )
    }
}