import React, { Component } from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import RepresentativeManager from "./../../modules/RepresentativeManager"

export default class RepresentativeCard extends Component {



    saveOfficial = () => {
        let sessionUser = sessionStorage.getItem("user");
        let sessionUserId = Number(sessionUser);

        let officialObject = {
            name: this.props.official.name,
            office: this.props.office.name,
            levelOfGovernment: this.props.level,
            photo: this.props.photo,
            userId: sessionUserId
        }

        RepresentativeManager.saveOfficial(officialObject)
        alert(`You have saved ${this.props.official.name} to your profile`)
    }

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
                    <Button onClick={this.saveOfficial}>Save</Button>
                </Card.Content>
            </Card>
        )
    }
}


