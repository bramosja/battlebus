import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Header, Image, Menu, Segment, Sidebar } from 'semantic-ui-react';

export default class Nav extends Component {
  render() {
      return (
        <Sidebar.Pushable as={Segment}>
           <Sidebar as={Menu} animation='overlay' icon='labeled' inverted vertical visible width='thin'>

            <Link className="item" to="/local">Local</Link>
            <Link className="item" to="/">Regional</Link>
            <Link className="item" to="/">State</Link>
            <Link className="item" to="/">Federal</Link>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>

      )
  }
}
