import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Nav extends Component {
  render() {
      return (
        <React.Fragment>
          <Link className="item" to="/local" onClick={this.props.handleItemClick}>Local</Link>
          <Link className="item" to="/" onClick={this.props.handleItemClick}>Regional</Link>
          <Link className="item" to="/" onClick={this.props.handleItemClick}>State</Link>
          <Link className="item" to="/" onClick={this.props.handleItemClick}>Federal</Link>
        </React.Fragment>
      )
  }
}
