import React from 'react'
import portrait from '../../img/rolam/portrait.png'


export default function Rolam(props) {
    return (
        <div className='rolam'>
            <h1>
                Baltringer Mária vagyok
                <br></br>
                - nőiruha készítő -
            </h1>
            <section>
                <main>
                    {props.rolam.map((element, index) =>
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

