import React, { Component } from 'react';
import { Divider, Grid, Segment } from 'semantic-ui-react'
import SavedPoliticianCard from "./SavedPoliticianCard"
import Notes from "./notes/Notes"

export default class SavedPoliticianContainer extends Component {
    render() {
        return (

            // map through all the user's saved politicians in order to add them to the dom with styling
            this.props.allPoliticians.map(politician =>
                <Segment key={politician.id}>
                    <Grid columns={2} relaxed='very'>
                        <Grid.Column>
                                <SavedPoliticianCard politician={politician}/>
                        </Grid.Column>
            {/* add all notes for the saved politician to the user's profile */}
                        <Grid.Column>
                            <Notes allNotes={this.props.allData.notes}/>
                        </Grid.Column>
                    </Grid>
                    <Divider vertical></Divider>
                </Segment>
            )
        )

    }}