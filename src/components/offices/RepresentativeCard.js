import React, { Component } from "react";
import { Card, Grid, Icon, Image, Button } from "semantic-ui-react";
import RepresentativeManager from "./../../modules/RepresentativeManager";
import blankProfileImage from "./images/blankProfilePic.png"
import "./Offices.css"


export default class RepresentativeCard extends Component {
    state = {
        contentClicked: false,
        division: ""
    }

    toggleContentClick = () => {
        this.setState({ contentClicked: !this.state.contentClicked })
    }


    // the saveOfficial function takes some of the information provided by the civic api and saves it to the user's profile. it then alerts the user that they have saved the politician
    saveOfficial = () => {
        let sessionUser = sessionStorage.getItem("user");
        let sessionUserId = Number(sessionUser);

        let officialObject = {
            name: this.props.official.name,
            office: this.props.office.name,
            levelOfGovernment: this.props.level,
            photo: this.props.photo,
            address: this.props.address[0],
            phone: this.props.official.phones[0],
            division: this.state.division,
            userId: sessionUserId,
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
        let divisionName = `${division}`

        if(this.props.divisions[divisionName]){
            return <Card.Meta>Division: {this.props.divisions[divisionName].name}</Card.Meta>
        }
    }

    address = () => {
        if (this.props.address){
            return <div className="addressContainer">
                <div height="100%" >
                    <Icon name="mail outline" />
                </div>
                <div>
                    {this.props.address[0].line1} <br />
                    {this.props.address[0].line2}
                    {this.props.address[0].city} <br />
                    {this.props.address[0].state} <br />
                    {this.props.address[0].zip} <br />
                </div>
            </div>
        }
    }

    cardContent = () => {
        if(this.state.contentClicked){
            return <React.Fragment>
                <Card.Content>
                    <Card.Header>{this.props.official.name}</Card.Header>
                    <Card.Description>
                        <Icon name="phone" />
                        {this.props.official.phones[0]}
                        <br />
                        {this.address()}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <div>
                    <Button icon labelPosition='left' onClick={this.toggleContentClick}>
                        <Icon name='info' />
                        Info
                    </Button>
                    <Button basic floated="right" onClick={this.saveOfficial}>Save</Button>
                </div>
                </Card.Content>
            </React.Fragment>
        } else {
            return <React.Fragment>
                <Card.Content>
                    <Card.Header>{this.props.official.name}</Card.Header>
                    {this.findPoliticianDivision(this.props.office.divisionId)}
                    <Card.Description>{this.props.official.party}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                <div>
                    <Button icon labelPosition='left' onClick={this.toggleContentClick}>
                        <Icon name='address card' />
                        Contact
                    </Button>
                    <Button basic floated="right" onClick={this.saveOfficial}>Save</Button>
                </div>
                </Card.Content>
            </React.Fragment>
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

                    {this.cardContent()}

                </Card>
            </Grid.Column>
        )
    }
}


