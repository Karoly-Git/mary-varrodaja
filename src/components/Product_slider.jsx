import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { MdOutlineNavigateNext as NavArrow } from 'react-icons/md';
import SectionDevider from './SectionDevider';

export default function ProductSlider(props) {

    const [clicks, setClicks] = useState(0);
    const [width, setWidth] = useState(0);

    const [marginLeft, setMarginLeft] = useState(0);


    window.addEventListener('resize', () => {
        let firstWrapper = document.querySelector(".slider-box .wrapper:first-child");
        let width = parseFloat(getComputedStyle(firstWrapper).width);
        let offset = width * clicks;
        setMarginLeft(offset);
    });

    const clickOnRight = () => {
        if (clicks > -3) {
            let firstWrapper = document.querySelector(".slider-box .wrapper:first-child");
            let width = parseFloat(getComputedStyle(firstWrapper).width);
            setMarginLeft(width * (clicks - 1));
            setClicks(clicks - 1);
        }
    };

    const clickOnLeft = () => {
        let firstWrapper = document.querySelector(".slider-box .wrapper:first-child");
        let width = parseFloat(getComputedStyle(firstWrapper).width);
        setMarginLeft(width * (clicks + 1));
        setClicks(clicks + 1);
    };

    return (
        <div className='product-slider'>

            <SectionDevider h2={'Termékeim'} />

            <div className="slider-container">
                <div className='btn-box'><NavArrow className='icon left' onClick={clickOnLeft} style={clicks >= 0 ? { pointerEvents: 'none', opacity: '0' } : {}} /></div>

                <div className="slider-box">
                    {props.termekek.data.map((product, productIndex) =>
                        product.isActive &&
                        <div
                            key={productIndex}
                            className='wrapper'
                            style={productIndex === 0 ? { marginLeft: `${marginLeft}px` } : {}}
                        >
                            <Link to={'/termekek'}>
                                <img src={product.images.product_slider.src} alt={product.images.product_slider.alt} />
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                            </Link>
                        </div>
                    )}
                </div>

                <div className='btn-box'><NavArrow className='icon' onClick={clickOnRight} style={clicks <= -3 ? { pointerEvents: 'none', opacity: '0' } : {}} /></div>
            </div>

        </div>
    )
}
