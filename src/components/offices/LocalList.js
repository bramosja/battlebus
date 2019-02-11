import React, { Component } from 'react';

export default class LocalList extends Component {
    findOffices = () => {
        this.props.offices.map(office => {
            return <h1>office.levels[0]</h1>
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Offices</h1>
                {this.findOffices()}
            </React.Fragment>
            )
    }
}