import React, { Component } from 'react';
import LoginForm from "./LoginForm"

export default class LogIn extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Login</h1>
                <LoginForm {...this.props} users={this.props.users} authenticateUser={this.props.authenticateUser}/>
                <hr />
                <a href="/register">Register</a>

            </React.Fragment>
        )
    }
}