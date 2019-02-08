import React, { Component } from 'react';
import SavedPoliticianContainer from './SavedPoliticianContainer';
import ProfileManager from "../../modules/ProfileManager"

export default class ProfileList extends Component {
    state = {
        savedPoliticians: []
    }

    componentDidMount() {
        // get the current session user
        let sessionUser = sessionStorage.getItem("user");
        let sessionUserId = Number(sessionUser);
        console.log("hey")
        // get all the politicians that the active user has saved
        ProfileManager.getAllUserPoliticians(sessionUserId)
        .then(allUsersSavedPoliticians => {
            console.log(allUsersSavedPoliticians)
            this.setState({
            savedPoliticians: allUsersSavedPoliticians.savedPoliticians
            })
        })
    }


    render() {

        return (
            <React.Fragment>
                <h1>Profile</h1>
                <SavedPoliticianContainer allData={this.props.allData} allPoliticians={this.state.savedPoliticians}/>
            </React.Fragment>
        )
    }
}