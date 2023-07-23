import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { MdOutlineNavigateNext as NavArrow } from 'react-icons/md';
import SectionDevider from './SectionDevider';

export default function ProductSlider(props) {

    const [clicks, setClicks] = useState(0);

    const [marginLeft, setMarginLeft] = useState(0);

    window.addEventListener('resize', () => {
        let firstChild = document.querySelector(".slider-box a:first-child");
        let width = parseFloat(getComputedStyle(firstChild).width);
        let offset = width;
        setMarginLeft(offset * clicks);
    });

    const clickOnRight = () => {
        if (clicks >= -3) {
            let firstChild = document.querySelector(".slider-box a:first-child");
            let width = parseFloat(getComputedStyle(firstChild).width);
            let marginRight = parseFloat(getComputedStyle(firstChild).marginRight);
            let offset = width + marginRight;
            console.log(width, marginRight, offset);
            setMarginLeft(offset * (clicks - 1));
            setClicks(clicks - 1);
        }
    };

    const clickOnLeft = () => {
        let firstChild = document.querySelector(".slider-box a:first-child");
        let width = parseFloat(getComputedStyle(firstChild).width);
        let marginRight = parseFloat(getComputedStyle(firstChild).marginRight);
        let offset = width + marginRight;
        console.log(width, marginRight, offset);
        setMarginLeft(offset * (clicks + 1));
        setClicks(clicks + 1);
    };

    return (
        <div className='product-slider'>

            <SectionDevider h2={'Termékeim'} />

            <div className="slider-container">
                <div className='btn-box'><NavArrow className='icon left' onClick={clickOnLeft} style={clicks === 0 ? { pointerEvents: 'none', opacity: '0' } : {}} /></div>

                <div className="slider-box">
                    {props.termekek.data.map((product, productIndex) =>
                        product.isActive &&
                        <Link key={productIndex} to={'/termekek'} style={productIndex === 0 ? { marginLeft: `${marginLeft}px` } : {}}>
                            <img src={product.images.product_slider.src} alt={product.images.product_slider.alt} />
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                        </Link>
                    )}
                </div>

                <div className='btn-box'><NavArrow className='icon' onClick={clickOnRight} style={clicks === -4 ? { pointerEvents: 'none', opacity: '0' } : {}} /></div>
            </div>

        </div>
    )
}
