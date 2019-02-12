import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'

export default class SavedPoliticianCard extends Component {
    render() {
        return (
            // this card contains the immediate information the user would like to access about their saved politician, and the ability to add a note, delete the card, or see more information about the politician
                <Card key={this.props.politician.id}>
                    <Image src={this.props.politician.photo} />
                    <Card.Content>
                        <Card.Header>
                            {this.props.politician.name}
                        </Card.Header>
                        <Card.Meta>
                            {this.props.politician.levelOfGovernment}
                        </Card.Meta>
                        {/* <Card.Description></Card.Description> */}
                    </Card.Content>
                    <Card.Content extra>
                        {/* <p>Somemoreinfo</p> */}
                    </Card.Content>
                </Card>
        )}
}