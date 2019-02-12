import React, { Component } from 'react';
import RepresentativeCard from "./RepresentativeCard";

export default class RegionalList extends Component {
    state = {
        level: "State Government"
    }

    displayPoliticianInfo = () => {
        // create an if statement to ensure that the state actually contains information
        if(this.props.stateOffices.length > 0 && this.props.stateOfficials.length > 0){
            return (
                <React.Fragment>
                    <h1>State</h1>
                    {/* map through the offices and the indices indicated by the office to get the office title and the name of the person holding that office */}
                    {this.props.stateOffices.map(stateOffice =>
                        stateOffice.officialIndices.map( officialIndex =>
                            // call upon the representative card component for styling
                            <RepresentativeCard key={officialIndex} office={stateOffice} index={officialIndex} official={this.props.stateOfficials[officialIndex]} photo={this.props.stateOfficials[officialIndex].photoUrl} level={this.state.level}/>
                        )
                    )}
                </React.Fragment>
            )
            } else {
                return (
                    // message in the case that information for the candidates is not available
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