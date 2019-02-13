import React, { Component } from 'react';
import { Route } from "react-router-dom";
import ProfileList from "./profile/ProfileList"
import OfficesList from "./offices/OfficesList"



export default class ApplicationViews extends Component {
  // setting up for authentication of pages before a user can access them
  isAuthenticated = () => sessionStorage.getItem("user") !== null

  render() {
    console.log(sessionStorage.getItem("user"));
    return(
      <React.Fragment>
        <Route exact path="/profile" component={ProfileList} />
        <OfficesList />
      </React.Fragment>
    )
  }
}
