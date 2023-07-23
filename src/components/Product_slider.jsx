import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { MdOutlineNavigateNext as NavArrow } from 'react-icons/md';
import SectionDevider from './SectionDevider';

export default function ProductSlider(props) {

    const [clicks, setClicks] = useState(0);
    //const [boxWidth, setBoxWidth] = useState(0);
    const [position, setPosition] = useState(0);

    const updateMaxCount = () => {
        let windowWidth = window.innerWidth;
        if (windowWidth <= 650) {
            //console.log(windowWidth, '<= 650');
            setPosition(-6);
        };
        if (650 < windowWidth && windowWidth <= 1000) {
            //console.log('650 <', windowWidth, '&&', windowWidth, '<= 1000');
            setPosition(-5);
        };
        if (1000 < windowWidth && windowWidth <= 1250) {
            //console.log('1000 <', windowWidth, '&&', windowWidth, '<= 1250');
            setPosition(-4);
        };
        if (1250 < windowWidth) {
            //console.log('1250 <', windowWidth);
            setPosition(-3);
        };
    };

    const [marginLeft, setMarginLeft] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            updateMaxCount();
            const firstWrapper = document.querySelector(".slider-box .wrapper:first-child");
            const width = parseFloat(getComputedStyle(firstWrapper).width);
            const offset = width * clicks;
            setMarginLeft(offset);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [clicks]);


    const clickOnRight = () => {
        if (clicks > position) {
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
                <div className='btn-box'><NavArrow className='icon left' onClick={clickOnLeft} style={clicks === 0 ? { pointerEvents: 'none', opacity: '0' } : {}} /></div>

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

                <div className='btn-box'><NavArrow className='icon' onClick={clickOnRight} style={clicks === position ? { pointerEvents: 'none', opacity: '0' } : {}} /></div>
            </div>

        </div>
    )
}
