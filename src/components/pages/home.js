import React, { Component } from 'react';
import Clock from '../../helpers/clock/clock';
import Login from '../auth/login';
import SafetyTracker from './safety-tracker';
import NavigationContainer from '../navigation/navigation-container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NewUserRegistration from "./registration";
import ShowIncidentReports from "./all-incident-forms";

import capstone_logo from '../../helpers/images/capstone_logo.png';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedInStatus: "NOT_LOGGED_IN",
            user_name: ""
        }
        this.handleLoggedInStatus = this.handleLoggedInStatus.bind(this)
        this.handleLoginMessage = this.handleLoginMessage.bind(this)
    }

    handleSuccessfulLogin = (user_name) => {
         this.setState({
             loggedInStatus: "LOGGED_IN",
             user_name: user_name

         })
    }

    handleLoggedInStatus(props) {
        if (this.state.loggedInStatus === "LOGGED_IN") {
            return (
                <Router>
                    <NavigationContainer 
                    />
                    <Switch>
                        <Route path="/safety-tracker" component={SafetyTracker} />
                        <Route path="/registration" component={NewUserRegistration} />
                        <Route path="/all-incident-forms" component={ShowIncidentReports} />
                    </Switch>
                </Router> 
        )} else {
            return <Login handleSuccessfulLogin={this.handleSuccessfulLogin}/>
        }
    }

    handleLoginMessage() {
        if (this.state.loggedInStatus === "LOGGED_IN") {
            return (`You are logged in as: ${this.state.user_name}`)
        } else {
            return ("Please login")
        }
    }

    render() {
        return(
            <div className="home-page-container">
                <div className="header">
                    <div className="logo-container">
                        <div className="logo-image-wrapper">
                            <img src={capstone_logo} alt="Logo" />
                        </div>
                        <div className="logo-text-wrapper">
                            <h2>Getting Us All Home Safely</h2>
                        </div>
                    </div>
                    <div className="userinfo-container">
                        <div className="date-wrapper">
                            <Clock />
                        </div>
                        <div className="login-msg-wrapper">
                            {this.handleLoginMessage()}
                        </div>
                    </div>
                </div>
                <div className="page-container">
                    {this.handleLoggedInStatus()}
                </div>
            </div>
        )
    }
}