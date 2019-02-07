import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'

export default class SavedPoliticianCard extends Component {
    render() {
        return (
                <Card key={this.props.politician.id}>
                    <Image src={this.props.politician.photo} />
                    <Card.Content>
                        <Card.Header>
                            {this.props.politician.name}
                        </Card.Header>
                        <Card.Meta>
                            {this.props.politician.division}
                        </Card.Meta>
                        {/* <Card.Description></Card.Description> */}
                    </Card.Content>
                    <Card.Content extra>
                        <button>Add Note</button>
                        <button>Impeach</button>
                    </Card.Content>
                </Card>
        )}
}