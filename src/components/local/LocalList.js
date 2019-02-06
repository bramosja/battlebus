import React, { Component } from 'react';

export default class LocalList extends Component {
    render(){
        return (
            this.props.data.offices.map(office =>
                office.officialIndices.map(index =>
                    <div>
                        <p>{office.name}</p>
                        <p>{this.props.data.representatives[index].name}</p>

                    </div>
                )
            )
        )}
}