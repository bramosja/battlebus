import React, { Component } from 'react';
import { Route } from "react-router-dom";
import ApplicationViews from './ApplicationViews';
import Nav from "./nav/Nav"
import { Grid, Menu, Segment} from 'semantic-ui-react'
import Login from "./login/Login"
import Registration from "./register/Registration"



export default class Capstone extends Component {
    state = { activeItem: 'local' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  forSideBar = () => {
    //   if the user is logged in then they are presented with the side bar in order to change between pages
    if(sessionStorage.getItem("user")){
    return <Grid>
        <Grid.Column width={2}>
            <Menu fluid vertical tabular>
                <Nav handleItemClick={this.handleItemClick} activeItem={this.state.activeItem}/>
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