import React, { Component } from 'react';
import LoginForm from "./LoginForm";
import { Grid, Image } from 'semantic-ui-react';
import Logo from "../logo/BattlebusLogo.png"

export default class LogIn extends Component {
    render() {
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
                    <LoginForm {...this.props} users={this.props.users} authenticateUser={this.props.authenticateUser}/>
                    <hr />
                    <a href="/register">Register</a>
                </Grid.Column>
            </Grid>
        )
    }
}