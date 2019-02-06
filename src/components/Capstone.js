import React, { Component } from 'react';
import ApplicationViews from './ApplicationViews';
import Nav from "./nav/Nav"
import { Grid, Menu, Segment} from 'semantic-ui-react'

export default class Capstone extends Component {
    state = { activeItem: 'local' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        return(

            <Grid>
                <Grid.Column width={2}>
                    <Menu fluid vertical tabular>
                        <Nav handleItemClick={this.handleItemClick} activeItem={this.state.activeItem}/>
                    </Menu>
                </Grid.Column>

                <Grid.Column stretched width={14}>
                    <Segment>
                        <ApplicationViews />
                    </Segment>
                </Grid.Column>
            </Grid>

    )}
}