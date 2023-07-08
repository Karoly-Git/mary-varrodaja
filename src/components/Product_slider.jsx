import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { termekek } from '../data/data'
import { MdOutlineNavigateNext as NavArrow } from 'react-icons/md';

export default function Product_slider() {

    const [marginLeft, setMarginLeft] = useState(0);

    const clickOnRight = () => {
        if (marginLeft > -3 * 18) {
            setMarginLeft(marginLeft - 18);
            console.log(marginLeft - 18);
        }
    };
    const clickOnLeft = () => {
        if (marginLeft < 0) {
            setMarginLeft(marginLeft + 18);
            console.log(marginLeft + 18);
        }
    };

    return (
        <div className='product-slider'>
            <div className='title-box'>
                <div className='devider'></div>
                <h2>Termékeim</h2>
                <div className='devider'></div>
            </div>
            <div className="slider-container">
                <div className='btn-box'><NavArrow className='icon left' onClick={clickOnLeft} style={marginLeft === 0 ? { pointerEvents: 'none', opacity: '0' } : {}} /></div>
                <div className="slider-box">
                    {termekek.map((element, index) =>
                        <Link key={'product' + index} to={element.url} className='img-box' style={index === 0 ? { marginLeft: `${marginLeft}rem` } : {}}>
                            <img src={element.img} alt={element.alt} />
                            <h3>{element.title}</h3>
                        </Link>
                    )}
                </div>
                <div className='btn-box'><NavArrow className='icon' onClick={clickOnRight} style={marginLeft === -3 * 18 ? { pointerEvents: 'none', opacity: '0' } : {}} /></div>
            </div>
        </div>
    )
}
