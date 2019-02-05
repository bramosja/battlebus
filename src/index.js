import './semantic/out/semantic.min.css'
import "semantic-ui-css/semantic.min.css"
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import Capstone from "./components/Capstone"



ReactDOM.render(
    <Router>
        <Capstone />
    </Router>
    , document.getElementById('root'));


