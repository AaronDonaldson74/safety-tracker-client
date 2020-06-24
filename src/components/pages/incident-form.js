import React from "react";
import Form from "../forms/form";

export default function CurrentIncidentReport() {

    return(
        <div className="incident-report-container">
            <div className="header-banner">
                Incident Report
            </div>
            <div className="demographic-info-wrapper">
                <input type="datetime-local"/>
                <input type="text" placeholder="user name" />
            </div>
            <Form />
        </div>
    )
}