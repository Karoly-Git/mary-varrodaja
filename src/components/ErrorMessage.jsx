import React from 'react'

export default function ErrorMessage(props) {
    return (
        <div>
            <h2>You might have forgotten to run local server.</h2>
            <h3>{props.errMessage}</h3>
            <h3>{props.errName}</h3>
        </div>
    )
}