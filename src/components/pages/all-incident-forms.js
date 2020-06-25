import React, { Component } from 'react';
import IncidentReport from '../forms/incidentReports'

export default class ShowIncidentReports extends Component {
    constructor () {
        super();

        this.state = {
            incidentReports: []
        }
    }
    
    renderReportItem = () => {
        return this.state.incidentReports.map(incidentReport =>{
            return <IncidentReport 
            incident={incidentReport}
            key={incidentReport.id}
            />
        })
    }

    componentDidMount() {
        fetch('https://lifeboat-safety-tracker-api.herokuapp.com/incidentForms')
        // fetch('http://localhost:5000/incidentForms')
        .then(response => response.json())
        .then((data) => {
            this.setState({incidentReports: data})
        })

        .catch(err => console.log('fetch reports error', err))
    }

    render(){
        return(
            <div>
                <ul className="report-item">
                    {this.renderReportItem()}
                </ul>
            </div>
        )
    }
}