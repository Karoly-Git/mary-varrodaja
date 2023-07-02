import React from 'react'
import { rolam } from '../../data/data'


export default function Rolam() {
    return (
        <div className='rolam'>
            {rolam.map((element, index) =>
                <section key={'rolam' + index}>
                    <h3>{element.title}</h3>
                    <p>{element.description}</p>
                </section>
            )}
        </div>
    )
}
