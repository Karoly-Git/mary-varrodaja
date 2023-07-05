import React from 'react'
import { Link } from 'react-router-dom'

export default function ServicesAndProducts(props) {
    return (
        <div className='services-and-products'>
            {false && <h1>{props.h1}</h1>}
            <section>
                {props.list.map((element, index) =>
                    element.isActive && <Link
                        key={'services-and-products' + index}
                        to={element.url}>
                        <h2>{element.title}</h2>
                        <img src={element.img} alt={element.alt} ></img>
                        <p>{element.description}</p>
                    </Link>
                )}
            </section>
        </div>
    )
}


