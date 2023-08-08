import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { MdOutlineNavigateNext as Arrow } from 'react-icons/md'
import { AiFillStar as Star } from 'react-icons/ai'
import { RiDoubleQuotesL as Quotes } from 'react-icons/ri'

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

export default function ReviewSlider(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,

        nextArrow: <NextArrow />,
        prevArrow: <PreviousArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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
        <section className="review-container">
            <Slider {...settings} className='review-slider'>
                {props.velemenyek.map((element, velemenyekIndex) => (
                    element.isActive &&
                    <div
                        key={velemenyekIndex}
                        className="wrapper"
                    >
                        <p className='stars'>
                            <Star className='icon' />
                            <Star className='icon' />
                            <Star className='icon' />
                            <Star className='icon' />
                            <Star className='icon' />
                        </p>
                        <p>
                            <Quotes /> {element.comment} <Quotes />
                        </p>
                        <h3 className='name'>- {element.name} -</h3>
                    </div>
                ))}
            </Slider>
        </section>
    );
}


