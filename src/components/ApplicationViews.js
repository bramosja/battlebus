import React, { Component } from 'react';
import { Route } from "react-router-dom";
import RepresentativeManager from "../modules/RepresentativeManager"
import ProfileManager from "../modules/ProfileManager"
import LoginManager from "../modules/LoginManager"
import LocalList from "./local/LocalList"
import ProfileList from "./profile/ProfileList"
import Login from "./login/Login"
import FederalList from "./federal/FederalList"
import RegionalList from "./regional/RegionalList"
import StateList from "./state/StateList"


export default class ApplicationViews extends Component {
  isAuthenticated = () => sessionStorage.getItem("user") !== null

  state = {
    divisions: [],
    representatives: [],
    offices: [],
    users: [],
    savedPoliticians: [],
    notes: [],
  }

  // Check the user input against the database and then, if found, set the state as the found user
  authenticateUser = (userInput, userPass) => {
    LoginManager.findUser(userInput, userPass)
      .then(foundUser => {
          this.setState({
            users: foundUser
          })
        })
  }

  // get all the politicians that a user has saved



  componentDidMount() {
    let sessionUser = sessionStorage.getItem("user");
    let sessionUserId = Number(sessionUser);
    let address = "405%20North%20Jefferson%20St.%20Winchester%20Tennessee"

    RepresentativeManager.getAll(address)
      .then(allVoterInfo => {
        this.setState({
          divisions: allVoterInfo.divisions,
          representatives: allVoterInfo.officials,
          offices: allVoterInfo.offices
        })
    })

    ProfileManager.getAllUserPoliticians(sessionUserId)
    .then(allUsersSavedPoliticians => {
        this.setState({
          savedPoliticians: allUsersSavedPoliticians.savedPoliticians
        })
    })

    ProfileManager.getAllNotes()
      .then(allNotes => {
        this.setState({
          notes: allNotes
        })
    })

  }

  render() {

    return(
      <React.Fragment>
        <Route path="/login" render={props => {
          return <Login {...props} users={this.state.users} authenticateUser={this.authenticateUser}/>
        }}/>
        <Route exact path="/local" render={props => {
          return <LocalList data={this.state} />
        }} />
        <Route exact path="/profile/" render={props =>{
          return <ProfileList allData={this.state} allUserPoliticians={this.state.savedPoliticians} />
        }} />
        {/* <Route exact path="/profile/:userId(\d+)" render={props =>{
          return <ProfileList allData={this.state} />
        }} /> */}
        <Route exact path="/federal" render={props =>{
          return <FederalList allData={this.state} />
        }} />
        <Route exact path="/state" render={props =>{
          return <StateList allData={this.state} />
        }} />
        <Route exact path="/regional" render={props =>{
          return <RegionalList allData={this.state} />
        }} />
      </React.Fragment>
    )
  }
}
