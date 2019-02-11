import React, { Component } from 'react';

export default class FederalList extends Component {
    displayPoliticianInfo = () => {
        if(this.props.federalOffices.length > 0){
            return <React.Fragment>
                <h1>Federal</h1>
                {this.props.federalOffices.map(federalOffice =>
                    <h4>{federalOffice.name}</h4>
                )}
            </React.Fragment>
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
        console.log(this.props)
        return this.displayPoliticianInfo()

    }

}