import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Nav extends Component {
  handleLogoutClick = () => {
    sessionStorage.clear();
  }

  render() {
      return (
        <React.Fragment>
          <Link className="item" to="/local">Local</Link>
          <Link className="item" to="/state" onClick={this.props.handleItemClick}>State</Link>
          <Link className="item" to="/federal" onClick={this.props.handleItemClick}>Federal</Link>
          <Link className="item" to="/profile" onClick={this.props.handleItemClick}>Profile</Link>
          <Link className="item" to="/login" onClick={this.handleLogoutClick}>Logout</Link>
        </React.Fragment>
      )
  }
}
