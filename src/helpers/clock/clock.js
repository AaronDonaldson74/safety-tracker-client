import React, { useState, useEffect } from 'react';
import Moment from 'moment';

export default function Clock() {
    const[date, setDate] = useState(new Date());

    useEffect(() => {
        let timerId = setInterval( tick, 1000 )

        return () => clearInterval(timerId)
    })


    const tick = () => {
        setDate(new Date())
    }

    return (
        <div className="clock-container">
            <h2>{date.toLocaleTimeString()}</h2>
        </div>
    )
}