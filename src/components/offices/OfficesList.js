import React, { Component } from 'react';
import RepresentativeManager from "../../modules/RepresentativeManager"
import { Route } from "react-router-dom";
import FederalList from "./FederalList"
import RegionalList from "./RegionalList"
import LocalList from "./LocalList"

export default class OfficesList extends Component {

    state = {
        federalOffices: [],
        stateOffices: [],
        localOffices: []
    }

    componentDidMount() {
        RepresentativeManager.getAllFederalOffices()
            .then( federalOffice => {
                this.setState({
                    federalOffices: federalOffice.offices
                })
            })
        RepresentativeManager.getAllStateOffices()
            .then( stateOffice => {
                this.setState({
                    stateOffices: stateOffice.offices
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/local" render={props => {
                    return <LocalList localOffices={this.state.localOffices} />
                }} />
                <Route exact path="/regional" render={props =>{
                    return <RegionalList stateOffices={this.state.stateOffices} />
                }} />
                <Route exact path="/federal" render={props =>{
                    return <FederalList federalOffices={this.state.federalOffices} />
                }} />
            </React.Fragment>
            )
    }
}