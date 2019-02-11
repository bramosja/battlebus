import React, { Component } from 'react';
import RepresentativeCard from "./RepresentativeCard";

export default class LocalList extends Component {

    displayPoliticianInfo = () => {
        if(this.props.localOffices.length > 0 && this.props.allOfficials.length > 0){
            return (
                <React.Fragment>
                    <h1>Local</h1>
                    {this.props.localOffices.map(localOffice =>
                        localOffice.officialIndices.map(officialIndex =>
                            <RepresentativeCard key={officialIndex} office={localOffice} index={officialIndex} official={this.props.allOfficials[officialIndex]} photo={this.props.allOfficials[officialIndex].photoUrl} />
                    ))}
                </React.Fragment>
            )
            } else {
                return (
                    <React.Fragment>
                        <h1>Local</h1>
                        <h3>Unavailable</h3>
                    </React.Fragment>
                )
            }
    }

    render() {
        return this.displayPoliticianInfo()
    }
}