import React, { useState } from 'react'

import { MdOutlineNavigateNext as Arrow } from 'react-icons/md'
import { AiFillStar as Star } from 'react-icons/ai'
import { RiDoubleQuotesL as Quotes } from 'react-icons/ri'

export default function ReviewSlider(props) {
    const [marginLeft, setMarginLeft] = useState(0);

    const moveToRight = () => {
        if (marginLeft > -1 * (props.velemenyek.length - 1) * 100) {
            //console.log(marginLeft - 100);
            setMarginLeft(marginLeft - 100);
        } else {
            setMarginLeft(0);
        }
    };
    const moveToLeft = () => {
        if (marginLeft < 0) {
            //console.log(marginLeft + 100);
            setMarginLeft(marginLeft + 100);
        } else {
            setMarginLeft(-1 * (props.velemenyek.length - 1) * 100);
        }
    };

    return (
        <div className='review-slider'>
            <div className="slider-body">
                <div className="slider-container">
                    <div className="btn-box btn-box-left" onClick={moveToLeft}>
                        <Arrow className="icon left" />
                    </div>
                    <div className="slider-box">
                        {props.velemenyek.map((element, velemenyekIndex) => (
                            <div
                                key={velemenyekIndex}
                                className="slide"
                                style={velemenyekIndex === 0 ? { marginLeft: `${marginLeft}%` } : {}}
                            >
                                <h3 className='stars'>
                                    <Star className='icon' />
                                    <Star className='icon' />
                                    <Star className='icon' />
                                    <Star className='icon' />
                                    <Star className='icon' />
                                </h3>
                                <p>
                                    <Quotes /> {element.comment} <Quotes />
                                </p>
                                <h3 className='name'>- {element.name} -</h3>
                            </div>
                        ))}
                    </div>
                    <div className="btn-box btn-box-right">
                        <Arrow className="icon" onClick={moveToRight} />
                    </div>
                </div>
                {false && <div className='indicator-container'>
                    {props.velemenyek.map(i => <span key={i}></span>)}
                </div>}
            </div>
        </div>
    )
}
