import React from 'react'
import { Link } from 'react-router-dom'

import { termekek } from '../data/data'

export default function Product_slider() {
    return (
        <div className='product-slider'>
            <div className='title-box'>
                <div className='devider'></div>
                <h2>Termékeim</h2>
                <div className='devider'></div>
            </div>
            <div className="slider-box">
                {termekek.map((element, index) =>
                    <Link to={element.url} className='img-box'>
                        <img src={element.img} alt={element.alt} />
                        <h3>{element.title}</h3>
                    </Link>
                )}
            </div>
        </div>
    )
}
