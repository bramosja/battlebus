import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react'
import blankProfileImage from "./images/blankProfilePic.png"

export default class SavedPoliticianCard extends Component {
    politicianPhoto = () => {

        if(this.props.politician.photo){
            return this.props.politician.photo;
        } else {
            return blankProfileImage;
        }
    }
    render() {
        return (
            // this card contains the immediate information the user would like to access about their saved politician, and the ability to add a note, delete the card, or see more information about the politician
                <Card key={this.props.politician.id}>
                    <Image src={this.politicianPhoto()} />
                    <Card.Content>
                        <Card.Header>
                            {this.props.politician.name}
                        </Card.Header>
                        <Card.Meta>
                            {this.props.politician.levelOfGovernment}
                        </Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                    </Card.Content>
                </Card>
        )}
}