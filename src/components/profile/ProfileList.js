import React, { Component } from 'react';
import SavedPoliticianContainer from './SavedPoliticianContainer';
import ProfileManager from "../../modules/ProfileManager";

export default class ProfileList extends Component {
    state = {
        savedPoliticians: []
    }

    deletePolitician = (id) => {
        let sessionUser = sessionStorage.getItem("user");
        let sessionUserId = Number(sessionUser);
        ProfileManager.deletePolitician(id)
            .then( () => ProfileManager.getAllUserPoliticians(sessionUserId)
            .then(allUsersSavedPoliticians => {
                this.setState({
                savedPoliticians: allUsersSavedPoliticians.savedPoliticians
                })
            }))
    }

    componentDidMount() {
        // get the current session user
        let sessionUser = sessionStorage.getItem("user");
        let sessionUserId = Number(sessionUser);

        // get all the politicians that the active user has saved
        ProfileManager.getAllUserPoliticians(sessionUserId)
        .then(allUsersSavedPoliticians => {
            this.setState({
            savedPoliticians: allUsersSavedPoliticians.savedPoliticians
            })
        })
    }


    render() {
        return (
            <React.Fragment>
                <h1>Profile</h1>
                <SavedPoliticianContainer allPoliticians={this.state.savedPoliticians} deletePolitician={this.deletePolitician}/>
            </React.Fragment>
        )
    }
}