import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function SzolgEsTerm(props) {
    return (
        <div className='services-and-products'>
            {false && <h1>{props.h1}</h1>}
            <section>
                {props.list.map((element, index) =>
                    element.isActive && (
                        <Link
                            key={'services-and-products' + index}
                            to={`${element.url}#${element.html_id}`}                        >
                            <h2>{element.title}</h2>
                            <img src={element.img} alt={element.alt} />
                            <p>{element.description}</p>
                        </Link>
                    ))}
            </section>
        </div>
    );
}
