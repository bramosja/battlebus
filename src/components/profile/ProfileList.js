import React, { Component } from 'react';
import SavedPoliticianContainer from './SavedPoliticianContainer';

export default class ProfileList extends Component {
    render() {
        console.log(sessionStorage.getItem("user"))
        return (
            <React.Fragment>
                <h1>Profile</h1>
                <SavedPoliticianContainer allData={this.props.allData}/>
            </React.Fragment>
        )
    }
}