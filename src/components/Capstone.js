import React, { Component } from 'react';
import ApplicationViews from './ApplicationViews';
import Nav from "./nav/Nav"
import { Grid, Menu, Segment, Header } from 'semantic-ui-react'

export default class Capstone extends Component {
    state = { activeItem: 'local' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        return(

            <Grid>
                <Grid.Column width={4}>
                    <Menu fluid vertical tabular>
                    <Nav handleItemClick={this.handleItemClick} />
                    </Menu>
                </Grid.Column>

                <Grid.Column stretched width={12}>
                    <Segment>
                        <Header as='h3'>Application Content</Header>
                        <ApplicationViews />
                    </Segment>
                </Grid.Column>
            </Grid>

    )}
}