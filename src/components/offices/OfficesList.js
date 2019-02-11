import React, { Component } from 'react';
import RepresentativeManager from "../../modules/RepresentativeManager"
import { Route } from "react-router-dom";
import FederalList from "./FederalList"
import RegionalList from "./RegionalList"
import LocalList from "./LocalList"

export default class OfficesList extends Component {

    state = {
        allOffices: [],
        allOfficials: [],
        federalOffices: [],
        federalOfficials: [],
        stateOffices: [],
        stateOfficials: [],
        localOffices: [],
        localOfficials: []
    }

    findLocalOffices = () => {
        let foundOffices = [];
        this.state.allOffices.forEach(office => {
            if(!office.levels){
                foundOffices.push(office)
            }
        })
        this.setState({
            localOffices: foundOffices
        })
    }

    componentDidMount() {
        RepresentativeManager.getAllFederalOffices()
            .then( federalOffice => {
                this.setState({
                    federalOffices: federalOffice.offices,
                    federalOfficials: federalOffice.officials
                })
            })
        RepresentativeManager.getAllStateOffices()
            .then( stateOffice => {
                this.setState({
                    stateOffices: stateOffice.offices,
                    stateOfficials: stateOffice.officials
                })
            })
        RepresentativeManager.getAllOffices()
            .then( allOffices => {
                this.setState({
                    allOffices: allOffices.offices,
                    allOfficials: allOffices.officials
                })
                this.findLocalOffices()
            })

    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/local" render={props => {
                    return <LocalList localOffices={this.state.localOffices} allOfficials={this.state.allOfficials} />
                }} />
                <Route exact path="/state" render={props =>{
                    return <RegionalList stateOffices={this.state.stateOffices} stateOfficials={this.state.stateOfficials} />
                }} />
                <Route exact path="/federal" render={props =>{
                    return <FederalList federalOffices={this.state.federalOffices} federalOfficials={this.state.federalOfficials}/>
                }} />
            </React.Fragment>
            )
    }
}