import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { MdOutlineNavigateNext as Arrow } from 'react-icons/md'

const ownStile = {
    //backgroundColor: 'gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    //borderRadius: '50%'
    //display: 'none'
}

function PreviousArrow(props) {
    const { onClick } = props;
    return (
        <div
            className="previous-button"
            onClick={onClick}
        >
            <Arrow className="icon" />
        </div>
    );
}
function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className="next-button"
            onClick={onClick}
        >
            <Arrow className="icon" />
        </div>
    );
}

export default function ProductSlide(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,

        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            {props.termekek.data.map((product, productIndex) =>
                product.isActive &&
                <div key={productIndex} className='wrapper'>
                    <Link to={'/termekek'}>
                        <img src={product.images.product_slider.src} alt={product.images.product_slider.alt} />
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </Link>
                </div>
            )}
        </Slider>
    );
}
