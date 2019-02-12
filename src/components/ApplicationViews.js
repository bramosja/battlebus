import React, { Component } from 'react';
import { Route } from "react-router-dom";
import RepresentativeManager from "../modules/RepresentativeManager"
import ProfileList from "./profile/ProfileList"
import OfficesList from "./offices/OfficesList"



export default class ApplicationViews extends Component {
  // setting up for authentication of pages before a user can access them
  isAuthenticated = () => sessionStorage.getItem("user") !== null

  state = {
    divisions: [],
    representatives: [],
    offices: [],
    users: []
  }

  componentDidMount() {

    // get all current politicians and candidates from the google civic api
    RepresentativeManager.getAllOffices()
      .then(allVoterInfo => {
        this.setState({
          divisions: allVoterInfo.divisions,
          representatives: allVoterInfo.officials,
          offices: allVoterInfo.offices
        })
    })
  }

  render() {
    console.log(sessionStorage.getItem("user"));
    return(
      <React.Fragment>
        <Route exact path="/profile" component={ProfileList} />
        <OfficesList offices={this.state.offices} />
      </React.Fragment>
    )
  }
}
