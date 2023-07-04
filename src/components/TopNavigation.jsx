import React from 'react'

import { BsTelephone as Phone } from 'react-icons/bs';
import { BsPhone as Mobile } from 'react-icons/bs';
import { ImWhatsapp as Whatsapp } from 'react-icons/im';
import { CiLocationOn as Location } from 'react-icons/ci';
import { AiOutlineMail as Email } from 'react-icons/ai';
import { BsMoon as Moon } from 'react-icons/bs';
import { FiFacebook as Facebook } from 'react-icons/fi';

export default function TopNavigation() {
    return (
        <nav className='top-navigation'>
            <ul>
                <li id="phone">
                    <a
                        href="tel:+3626390111"
                        rel="noopener noreferrer">
                        <Phone className='icon' />
                    </a>
                </li>
                <li id="mobile">
                    <a
                        href="tel:+36205112319"
                        rel="noopener noreferrer">
                        <Mobile className='icon' />
                    </a>
                </li>
                <li id="whatsapp">
                    <a
                        target="_blank" href="https://wa.me/+36205112319"
                        rel="noopener noreferrer">
                        <Whatsapp className='icon' />
                    </a>
                </li>
                <li id="location">
                    <a
                        target="_blank"
                        href="https://www.google.hu/maps/place/Dunabogd%C3%A1ny,+Kossuth+Lajos+%C3%BAt+312,+2023+Magyarorsz%C3%A1g/@47.80205,19.0102433,17z/data=!3m1!4b1!4m5!3m4!1s0x476a80db29326d7f:0xf816991ef8d843a5!8m2!3d47.80205!4d19.012432"
                        rel="noopener noreferrer">
                        <Location className='icon' />
                    </a>
                </li>
                <li id="email">
                    <a
                        title="maryvarrodaja@gmail.com"
                        href="mailto:maryvarrodaja@gmail.com"
                        rel="noopener noreferrer">
                        <Email className='icon' />
                    </a>
                </li>
                <li id="moon">
                    <i className="fa-regular fa-moon"></i>
                    <Moon className='icon' />
                </li>
                <li id="facebook">
                    <a
                        target="_blank"
                        href="https://www.facebook.com/Mary-Varrod%C3%A1ja-361242777642662"
                        rel="noopener noreferrer">
                        <Facebook className='icon' />
                    </a>
                </li>
            </ul>
        </nav>
    )
}
