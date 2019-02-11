import React, { Component } from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

export default class RepresentativeCard extends Component {
    render(){
        return (
            <Card key={this.props.index}>
                <Image src={this.props.photo} />
                <Card.Content>
                <Card.Header>{this.props.official.name}</Card.Header>
                <Card.Meta>Maybe some district info?</Card.Meta>
                <Card.Description>{this.props.office.name}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='address card' />
                    Contact
                    <Button>Save</Button>
                </Card.Content>
            </Card>
        )
    }
}


