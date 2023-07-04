import React from 'react'
import { gyik, reviews } from '../data/data'

import { BsTelephone as Phone } from 'react-icons/bs';
import { BsPhone as Mobile } from 'react-icons/bs';
import { ImWhatsapp as Whatsapp } from 'react-icons/im';
import { FiMapPin as Location } from 'react-icons/fi';
import { AiOutlineMail as Email } from 'react-icons/ai';

export default function Info() {

    function indexes(num, data) {
        const length = data.length;
        let indexList = [];
        while (indexList.length < num) {
            let randIndex = Math.trunc(Math.random() * length);
            if (!indexList.includes(randIndex)) {
                indexList.push(randIndex)
            }
        }
        return indexList;
    }

    return (
        <div className='info'>
            <div className='contact box'>
                <h3 className='box-title'>Elérhetőségek</h3>
                <div className='devider'></div>
                <ul>
                    <li>
                        <ul>
                            <li id="phone">
                                <a
                                    href="tel:+3626390111"
                                    rel="noopener noreferrer">
                                    <Phone className='icon' />+36 26 390 111
                                </a>
                            </li>
                            <li id="mobile">
                                <a
                                    href="tel:+36205112319"
                                    rel="noopener noreferrer">
                                    <Mobile className='icon' />+36 20 511 2319
                                </a>
                            </li>
                            <li id="whatsapp">
                                <a
                                    target="_blank" href="https://wa.me/+36205112319"
                                    rel="noopener noreferrer">
                                    <Whatsapp className='icon' />WhatsApp
                                </a>
                            </li>
                            <li id="location">
                                <a
                                    target="_blank"
                                    href="https://www.google.hu/maps/place/Dunabogd%C3%A1ny,+Kossuth+Lajos+%C3%BAt+312,+2023+Magyarorsz%C3%A1g/@47.80205,19.0102433,17z/data=!3m1!4b1!4m5!3m4!1s0x476a80db29326d7f:0xf816991ef8d843a5!8m2!3d47.80205!4d19.012432"
                                    rel="noopener noreferrer">
                                    <Location className='icon' />Dunabogdány <br></br>
                                    Kossuth Lajos út 312. <br></br>
                                    2023 <br></br>
                                </a>
                            </li>
                            <li id="email">
                                <a
                                    title="maryvarrodaja@gmail.com"
                                    href="mailto:maryvarrodaja@gmail.com"
                                    rel="noopener noreferrer">
                                    <Email className='icon' />Email
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className='instance box gyik'>
                <h3 className='box-title'>Hírek</h3>
                <div className='devider'></div>
                <ul>
                    {indexes(2, gyik).map((element, index) =>
                        <li key={'gyik' + index}>
                            <h4>{gyik[element].question}</h4>
                            <p>{gyik[element].answer}</p>
                        </li>
                    )}
                </ul>
            </div>

            <div className='instance box gyik'>
                <h3 className='box-title'>Kérdések és válaszok</h3>
                <div className='devider'></div>
                <ul>
                    {indexes(2, gyik).map((element, index) =>
                        <li key={'gyik' + index}>
                            <h4>{gyik[element].question}</h4>
                            <p>{gyik[element].answer}</p>
                        </li>
                    )}
                </ul>
            </div>

            <div className='instance box reviews'>
                <h3 className='box-title'>Vélemények</h3>
                <div className='devider'></div>
                <ul>
                    {indexes(3, reviews).map((element, index) =>
                        <li key={'reviews' + index}>
                            <h4>{reviews[element].name}</h4>
                            <p>{reviews[element].comment}</p>
                            <p className='date'>{reviews[element].timestamp.split('T')[0]}</p>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
