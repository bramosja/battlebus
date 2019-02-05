import React, { Component } from 'react';
import RepresentativeManager from "../modules/RepresentativeManager"

export default class ApplicationViews extends Component {
  state = {
    divisions: [],
    representatives: [],
    offices: []
  }

  componentDidMount() {
    let address = "405%20North%20Jefferson%20St.%20Winchester%20Tennessee"
    RepresentativeManager.getAll(address)
      .then(allVoterInfo => {
        this.setState({
          divisions: allVoterInfo.divisions,
          representatives: allVoterInfo.officials,
          offices: allVoterInfo.offices
        })
      })

  }

  render() {
    return(
      this.state.offices.map(office =>
        office.officialIndices.map(index =>
        <div>
          <h1>{this.state.representatives[index].name}</h1>
          <p>{office.name}</p>
        </div>
          )
      )
    )
  }
}
