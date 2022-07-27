import React, { useEffect, useState } from 'react'

function ClockFunction() {

    const [date, setDate] = useState(new Date())

    function tick() {
        setDate(new Date())
    }

    useEffect(() => {
        const timerID = setInterval(tick, 1000);
        return () => clearInterval(timerID)

    });

    return (
        <div>
            <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    );
}

export default ClockFunction;