import React, { Component } from 'react';
import SavedPoliticianContainer from './SavedPoliticianContainer';

export default class ProfileList extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Profile</h1>
                <SavedPoliticianContainer allData={this.props.allData} allPoliticians={this.props.allUserPoliticians}/>
            </React.Fragment>
        )
    }
}