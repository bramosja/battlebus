import React, { Component } from 'react';
import RepresentativeCard from "./RepresentativeCard"

export default class FederalList extends Component {
    state = {
        level: "Federal Government"
    }

    displayPoliticianInfo = () => {
        // create an if statement to ensure that the state actually contains the necessary information
        if(this.props.federalOffices.length > 0 && this.props.federalOfficials.length > 0){
            return (
                <React.Fragment>
                    <h1>Federal</h1>
                    {/* map through the offices and the indices indicated by the office to get the office title and the name of the person holding that office */}
                    {this.props.federalOffices.map(federalOffice =>
                        federalOffice.officialIndices.map( officialIndex =>
                            // call upon the representative card component for styling
                            <RepresentativeCard key={officialIndex} office={federalOffice} index={officialIndex} official={this.props.federalOfficials[officialIndex]} photo={this.props.federalOfficials[officialIndex].photoUrl} level={this.state.level} />
                        )
                    )}
                </React.Fragment>
            )
        } else {
            return (
                // message in the case that information for the candidates is not available
                <React.Fragment>
                    <h1>Federal</h1>
                    <h3>Unavailable</h3>
                </React.Fragment>
            )
            }
    }

    render() {
        return this.displayPoliticianInfo()

    }

}