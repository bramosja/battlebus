import React, { Component } from 'react';
import RepresentativeCard from "./RepresentativeCard"

export default class FederalList extends Component {
    displayPoliticianInfo = () => {
        if(this.props.federalOffices.length > 0 && this.props.federalOfficials.length > 0){
            return (
                <React.Fragment>
                    <h1>Federal</h1>
                    {this.props.federalOffices.map(federalOffice =>
                        federalOffice.officialIndices.map( officialIndex =>
                            <RepresentativeCard key={officialIndex} office={federalOffice} index={officialIndex} official={this.props.federalOfficials[officialIndex]} photo={this.props.federalOfficials[officialIndex].photoUrl} />
                        )
                    )}
                </React.Fragment>
            )
        } else {
            return (
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