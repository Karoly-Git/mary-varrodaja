import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { termekek as products } from '../data/data'
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
        <div className='product-slider' ref={props.scrollRefProducts}>

            <SectionDevider h2={'Termékeim'} />

            <div className="slider-container">
                <div className='btn-box'><NavArrow className='icon left' onClick={clickOnLeft} style={marginLeft === 0 ? { pointerEvents: 'none', opacity: '0' } : {}} /></div>
                <div className="slider-box">
                    {products.data.map((product, productindex) =>
                        product.isActive &&
                        <Link key={'product' + productindex} to={product.url} className='img-box' style={productindex === 0 ? { marginLeft: `${marginLeft}rem` } : {}}>
                            <img src={product.images.img_1.src} alt={product.images.img_1.alt} />
                            <h3>{product.title}</h3>
                        </Link>
                    )}
                </div>
                <div className='btn-box'><NavArrow className='icon' onClick={clickOnRight} style={marginLeft === -3 * 18 ? { pointerEvents: 'none', opacity: '0' } : {}} /></div>
            </div>

        </div>
    )
}
