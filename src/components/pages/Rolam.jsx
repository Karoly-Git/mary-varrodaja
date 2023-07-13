import React from 'react'
import { rolam } from '../../data/pages_data'
import portrait from '../../img/rolam/portrait.png'


export default function Rolam() {
    return (
        <div className='rolam'>
            <h1>Baltringer Mária vagyok, nőiruha készítő</h1>
            <section>
                <main>
                    {rolam.map((element, index) =>
                        <section key={'rolam' + index}>
                            <h3>{element.title}</h3>
                            <p>{element.description}</p>
                        </section>
                    )}
                </main>
                <aside>
                    <img className='portrait' src={portrait} alt="" />
                </aside>
            </section>
        </div>
    )
}

