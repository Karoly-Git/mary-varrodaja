import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { MdOutlineNavigateNext as Arrow } from 'react-icons/md'

function PreviousArrow(props) {
    const { className, style, onClick } = props;
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

export default function ProductSlider(props) {
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
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="product-container">
            <Slider {...settings} className="product-slider">
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
        </section>
    );
}
