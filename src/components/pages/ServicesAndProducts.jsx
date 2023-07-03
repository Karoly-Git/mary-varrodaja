import React from 'react'
import { Link } from 'react-router-dom'

export default function ServicesAndProducts(props) {
    return (
        <div className='services-and-products'>
            {props.list.map((element, index) =>
                <Link
                    key={'services-and-products' + index}
                    to={element.url}>
                    <section>
                        <h3>{element.title}</h3>
                        <img style={{ width: '150px' }} src={element.img} alt={element.alt} ></img>
                        <p>{element.description}</p>
                    </section>
                </Link>
            )}
        </div>
    )
}


