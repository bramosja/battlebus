import React, { Component } from 'react';

export default class LocalList extends Component {
    render(){
        return (
            this.props.data.offices.map(office =>
                office.officialIndices.map(index =>
                    <div>
                        <h1>{this.props.data.representatives[index].name}</h1>
                        <p>{office.name}</p>
                    </div>
                )
            )
        )}
}