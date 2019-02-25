import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { Grid, Image, Menu, Segment } from 'semantic-ui-react'
import ApplicationViews from './ApplicationViews';
import Login from "./login/Login"
import Logo from "./logo/BattlebusLogo.png";
import Nav from "./nav/Nav"
import Registration from "./register/Registration"
import "../index.css"



export default class Capstone extends Component {
    state = { activeItem: "local" }

    handleLogoutClick = () => {
        sessionStorage.clear();
      }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name });
    };


    forSideBar = () => {
        //   if the user is logged in then they are presented with the side bar in order to change between pages
        if(sessionStorage.getItem("user")){
        return <Grid>
            <Grid.Column width={2}>
                <Menu fluid inverted vertical tabular>
                        <Image className="smallLogo" src={Logo} />
                    <div className="smallNav">
                        <Link to="/profile" onClick={this.handleItemClick}>Profile</Link>
                        <Link to="/Login" onClick={this.handleLogoutClick}>Logout</Link>
                    </div>
                    <Nav className="navbar" handleItemClick={this.handleItemClick} activeItem={this.state.activeItem}/>
                </Menu>
            </Grid.Column>

            <Grid.Column stretched width={14}>
                <Segment>
                    <ApplicationViews />
                </Segment>
            </Grid.Column>
        </Grid>
        } else {
            // If the user is not logged in they are presented with the log in page, and the option of registering an account
            return <React.Fragment>
                <Route path="/login" render={props => {
                return <Login {...props} users={this.state.users} authenticateUser={this.authenticateUser}/>
                }}/>
                <Route path="/register" render={props => {
                    return <Registration {...props} />
                }} />
            </React.Fragment>
        }
    }


    render() {

        return(
            this.forSideBar()
    )}
}