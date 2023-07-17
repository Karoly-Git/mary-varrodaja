import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { MdOutlineNavigateNext as NavArrow } from 'react-icons/md';
import SectionDevider from './SectionDevider';

export default function ProductSlider(props) {

    const [marginLeft, setMarginLeft] = useState(0);

    const clickOnRight = () => {
        if (marginLeft > -3 * 18) {
            setMarginLeft(marginLeft - 18);
            //console.log(marginLeft - 18);
        }
    };
    const clickOnLeft = () => {
        if (marginLeft < 0) {
            setMarginLeft(marginLeft + 18);
            //console.log(marginLeft + 18);
        }
    };

    return (
        <div className='product-slider'>

            <SectionDevider h2={'Termékeim'} />

            <div className="slider-container">
                <div className='btn-box'><NavArrow className='icon left' onClick={clickOnLeft} style={marginLeft === 0 ? { pointerEvents: 'none', opacity: '0' } : {}} /></div>
                <div className="slider-box">
                    {props.termekek.data.map((product, productindex) =>
                        product.isActive &&
                        <Link key={'product' + productindex} to={'/termekek'} className='img-box' style={productindex === 0 ? { marginLeft: `${marginLeft}rem` } : {}}>
                            <img src={product.images.product_slider.src} alt={product.images.product_slider.alt} />
                            <h3>{product.title}</h3>
                            <p>{product.description}</p>
                        </Link>
                    )}
                </div>
                <div className='btn-box'><NavArrow className='icon' onClick={clickOnRight} style={marginLeft === -3 * 18 ? { pointerEvents: 'none', opacity: '0' } : {}} /></div>
            </div>

        </div>
    )
}
