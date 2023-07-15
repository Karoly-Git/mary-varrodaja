import React from 'react'

export default function Gyik(props) {
    return (
        <div className='gyik'>
            {props.gyik.map((question, index) =>
                <section key={'question' + index}>
                    <h3>{question.question}</h3>
                    <p>{question.answer}</p>
                </section>
            )}
        </div>
    )
}
