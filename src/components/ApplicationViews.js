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
  state = {
    divisions: [],
    representatives: [],
    offices: []
  }

  componentDidMount() {
    let address = "405%20North%20Jefferson%20St.%20Winchester%20Tennessee"
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
    return(
      <React.Fragment>
        <Route path="/login" component={Login} />
        <Route exact path="/local" render={props => {
          return <LocalList data={this.state} />
        }} />
        <Route exact path="/profile/:userId(\d+)" render={props =>{
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
