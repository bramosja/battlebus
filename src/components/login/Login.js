import React, { Component } from 'react';
import LoginForm from "./LoginForm"

export default class LogIn extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Login</h1>
                <LoginForm />
                <hr />
                <a href="/register">Register</a>

            </React.Fragment>
        )
    }
}