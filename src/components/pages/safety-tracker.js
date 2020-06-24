import React, { Component } from "react";
import Form from '../forms/form'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class SafetyTracker extends Component {

    render() {
        return(
            <div className="app">
                <div className="emerg-msg-container">
                    <div className="emerg-icon">
                        <FontAwesomeIcon icon="bolt" />
                    </div>
                    <div className="emerg-msg-wrapper">
                        <p>If this is an emergency, please dial</p> 
                        <button className="btn">911</button>
                    </div>
                    <div className="emerg-icon">
                        <FontAwesomeIcon icon="bolt" /> 
                    </div>
                </div>
                <div className="Form">
                    <Form />
                </div>
        </div>
        )
    }
}
export default SafetyTracker;