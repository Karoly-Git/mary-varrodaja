import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

//to={`${element.url}#${element.html_id}`}

export default function SzolgEsTerm(props) {
    return (
        <div className='services-and-products'>
            {false && <h1>{props.h1}</h1>}
            <section>
                {props.data.map((element, index) =>
                    element.isActive && (
                        <Link
                            key={'services-and-products' + index}
                            to={`${element.url}`}
                        >
                            <h2>{element.title}</h2>
                            <img src={element.images.page.src} alt={element.images.page.alt} />
                            <p>{element.description}</p>
                        </Link>
                    ))}
            </section>
        </div>
    );
}
