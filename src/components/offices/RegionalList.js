import React, { Component } from 'react';
import RepresentativeCard from "./RepresentativeCard";

export default class RegionalList extends Component {

    displayPoliticianInfo = () => {
        if(this.props.stateOffices.length > 0 && this.props.stateOfficials.length > 0){
            return (
                <React.Fragment>
                    <h1>State</h1>
                    {this.props.stateOffices.map(stateOffice =>
                        stateOffice.officialIndices.map( officialIndex =>
                            <RepresentativeCard key={officialIndex} office={stateOffice} index={officialIndex} official={this.props.stateOfficials[officialIndex]} photo={this.props.stateOfficials[officialIndex].photoUrl} />
                        )
                    )}
                </React.Fragment>
            )
            } else {
                return (
                    <React.Fragment>
                        <h1>State</h1>
                        <h3>Unavailable</h3>
                    </React.Fragment>
                )
            }
    }

    render() {
        return this.displayPoliticianInfo()
    }
}