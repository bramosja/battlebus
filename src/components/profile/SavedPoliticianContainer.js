import React, { Component } from 'react';
import { Divider, Grid, Segment } from 'semantic-ui-react'
import SavedPoliticianCard from "./SavedPoliticianCard"
import Notes from "./notes/Notes"

export default class SavedPoliticianContainer extends Component {
    render() {
        return (
            this.props.allPoliticians.map(politician =>
                <Segment key={politician.id}>
                    <Grid columns={2} relaxed='very'>
                        <Grid.Column>
                                <SavedPoliticianCard politician={politician}/>
                        </Grid.Column>
                        <Grid.Column>
                            <Notes allNotes={this.props.allData.notes}/>
                        </Grid.Column>
                    </Grid>
                    <Divider vertical></Divider>
                </Segment>
            )
        )

    }}