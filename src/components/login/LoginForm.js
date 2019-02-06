import React, { Component } from 'react';


export default class LoginForm extends Component {
    render(){
        return(
            <form>
                <label>
                    User Name:
                    <input />
                </label>
                <label>
                    Password:
                    <input />
                </label>
                <br />
                <button
                    type="submit"
                    onClick={console.log("I work")}
                >
                    Log In
                </button>
            </form>
        )
    }
}