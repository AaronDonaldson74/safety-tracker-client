import React from 'react'
import moment from 'moment'

export default function IncidentReport(props) {
    return(
        <div className="report-wrapper">
            <h1>{moment(props.incident.pub_date).format('LLLL')}</h1>
            <div>Submitted by:{props.incident.author}</div>
       </div>
    )
}


