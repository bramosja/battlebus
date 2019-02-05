import React, { Component } from 'react';
import ApplicationViews from './ApplicationViews';
import Nav from "./nav/Nav"

export default class Capstone extends Component {
    render() {
        return(
            <React.Fragment>

                    <Nav />

                {/* <div className="pusher"> */}
                    <ApplicationViews />
                {/* </div> */}
            </React.Fragment>
    )}
}