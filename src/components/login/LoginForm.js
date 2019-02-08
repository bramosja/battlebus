import React, { Component } from 'react';


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
        this.props.authenticateUser(this.state.userName, this.state.password);
        this.props.users.forEach(user => {
            let loggedIn = false;
            this.setState({
                user: user
            })
            if (this.state.userName === user.userName && this.state.password === user.password) {
                loggedIn = true;
                this.props.history.push("/profile")
            }
            if(loggedIn === true) {
                sessionStorage.setItem("user", user.id);

            }
        })
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