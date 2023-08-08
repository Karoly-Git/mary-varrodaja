import React from 'react'
import photo from '../../img/rolam/photo.png'


export default function Rolam(props) {
    return (
        <div className='rolam'>
            <h2>
                Baltringer Mária vagyok
            </h2>
            <h1>
                nőiruha készítő
            </h1>
            <section>
                <main>
                    {props.rolam.map((element, index) => (
                        element.isActive &&
                        <section key={'rolam' + index}>
                            <h3>{element.title}</h3>
                            <p>{element.description}</p>
                        </section>
                    ))}
                </main>
                <aside>
                    <img className='photo' src={photo} alt="" />
                </aside>
            </section>
        </div>
    )
}

