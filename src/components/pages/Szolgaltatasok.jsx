import React from 'react'
import { Link } from 'react-router-dom'
import { szolgaltatasok } from '../../data/data'

export default function Szolgaltatasok() {
    return (
        <div className='szolgaltatasok'>
            {szolgaltatasok.map((szolgaltatas, index) =>
                <Link
                    key={'szolgaltatas' + index}
                    to={szolgaltatas.url}>
                    <section>
                        <h3>{szolgaltatas.title}</h3>
                        <img style={{ width: '150px' }} src={szolgaltatas.img} alt={szolgaltatas.alt} ></img>
                        <p>{szolgaltatas.description}</p>
                    </section>
                </Link>
            )}
        </div>
    )
}

