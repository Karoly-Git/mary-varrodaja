import React from 'react'

export default function LocalServerNotRunning(props) {
    return (
        <div>
            <h2>You are running on local server mode, however you might have forgotten to run local server.</h2>
            <h3>{props.errMessage}</h3>
            <h3>{props.errName}</h3>
        </div>
    )
}
