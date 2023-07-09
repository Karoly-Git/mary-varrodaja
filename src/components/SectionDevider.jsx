import React from 'react'

export default function SectionDevider(props) {
    return (
        <div className='section-devider-box'>
            <div className='devider'></div>
            <h2>{props.h2}</h2>
            <div className='devider'></div>
        </div>
    )
}
