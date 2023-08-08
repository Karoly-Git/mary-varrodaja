import React from 'react'

export default function Gyik(props) {
    return (
        <div className='gyik'>
            <h1>Gyakori kérdések</h1>
            {props.gyik.map((question, index) => (
                question.isActive &&
                <section key={'question' + index}>
                    <h3>{question.question}</h3>
                    <p>{question.answer}</p>
                </section>
            ))}
        </div>
    )
}
