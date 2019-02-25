import React, { Component } from "react";
import { Card, Grid, Icon, Image, Button } from "semantic-ui-react";
import RepresentativeManager from "./../../modules/RepresentativeManager";
import blankProfileImage from "./images/blankProfilePic.png"
import "./Offices.css"


export default class RepresentativeCard extends Component {
    // the saveOfficial function takes some of the information provided by the civic api and saves it to the user's profile. it then alerts the user that they have saved the politician
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


    // function that distinguishes profiles that contain photos from profiles that do not, and includes an image in place of the actual photo
    officialPhoto = () => {

        if(this.props.photo){
            return this.props.photo;
        } else {
            return blankProfileImage;
        }
    }

    findPoliticianDivision = (division) => {
        console.log(this.props.divisions.division)
       if(this.props.divisions.division){
           return this.props.division.division.name
       }
    }

    render(){
        return (
            <Grid.Column>
                <div className="officeName">
                    <h3>{this.props.office.name}</h3>
                </div>
                <Card key={this.props.index}>
                    <Image className="imageWidth" src={this.officialPhoto()} />
                    <Card.Content>
                    <Card.Header>{this.props.official.name}</Card.Header>
                    <Card.Meta>{this.findPoliticianDivision(this.props.office.divisionId)}</Card.Meta>
                    <Card.Description>{this.props.official.party}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Icon name='address card' />
                        Contact
                        <Button onClick={this.saveOfficial}>Save</Button>
                    </Card.Content>
                </Card>
            </Grid.Column>
        )
    }
}


