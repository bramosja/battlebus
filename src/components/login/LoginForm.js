import React, { Component } from 'react';


export default class LoginForm extends Component {
    state = {
        userName: "",
        password: ""
    }

    // track changes to the input fields and update state accordingly
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    handleLogin = e => {
        let loggedIn = false;
        e.preventDefault();
        this.props.authenticateUser(this.state.userName, this.state.password);
        console.log("LF",this.props)
    };

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