import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { Grid, Image } from "semantic-ui-react";
import Logo from "../logo/BattlebusLogo.png";

export default class LogIn extends Component {
    render() {
        return (
            // The "Grid" elements of this code serve to provide the spacing and layout styling
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
                    {/* the login form handles the input and checks it against the database containing user information */}
                    <LoginForm {...this.props} />
                    <hr />
                    {/* if a user does not have a profile they can create one by going to the Register page */}
                    <a href="/register">Register</a>
                </Grid.Column>
            </Grid>
        )
    }
}