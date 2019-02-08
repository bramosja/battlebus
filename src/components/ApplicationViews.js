import React, { Component } from 'react';
import { Route } from "react-router-dom";
import RepresentativeManager from "../modules/RepresentativeManager"
import LocalList from "./local/LocalList"
import ProfileList from "./profile/ProfileList"
import Login from "./login/Login"
import FederalList from "./federal/FederalList"
import RegionalList from "./regional/RegionalList"
import StateList from "./state/StateList"


export default class ApplicationViews extends Component {
  // setting up for authentication of pages before a user can access them
  isAuthenticated = () => sessionStorage.getItem("user") !== null

  state = {
    divisions: [],
    representatives: [],
    offices: [],
    users: [],
    savedPoliticians: [],
    notes: [],
  }

  componentDidMount() {
    // currently hardcoding the address until the search functionality is implemented
    let address = "405%20North%20Jefferson%20St.%20Winchester%20Tennessee"

    // get all current politicians and candidates from the google civic api
    RepresentativeManager.getAll(address)
      .then(allVoterInfo => {
        this.setState({
          divisions: allVoterInfo.divisions,
          representatives: allVoterInfo.officials,
          offices: allVoterInfo.offices
        })
    })
  }

  render() {
    console.log(sessionStorage.getItem("user"))


    return(
      <React.Fragment>
        <Route path="/login" render={props => {
          return <Login {...props} users={this.state.users} authenticateUser={this.authenticateUser}/>
        }}/>
        <Route exact path="/local" render={props => {
          return <LocalList data={this.state} />
        }} />
        <Route exact path="/profile/" render={props =>{
          return <ProfileList allData={this.state} />
        }} />
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
