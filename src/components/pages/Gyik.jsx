import React from 'react'
import { gyik } from '../../data/data'

export default function Gyik() {
    return (
        <div className='gyik'>
            {gyik.map((question, index) =>
                <section key={'question' + index}>
                    <h3>{question.question}</h3>
                    <p>{question.answer}</p>
                </section>
            )}
        </div>
    )
}
