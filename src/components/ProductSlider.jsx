import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const ownStile = {
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, ...ownStile }}
            onClick={onClick}
        />
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

        nextArrow: <Arrow />,
        prevArrow: <Arrow />,

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
