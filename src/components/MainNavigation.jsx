import React from 'react'
import { Link } from 'react-router-dom'

import { RiScissorsCutFill as SzolgIcon } from 'react-icons/ri';
import { GiLargeDress as TermIcon } from 'react-icons/gi';
import { IoMdContact as AboutIcon } from 'react-icons/io';
import { BsTelephoneFill as ContactIcon } from 'react-icons/bs';
import logo from '../img/logo_brown.png'

export default function MainNavigation() {
    return (
        <nav className='main-navigation'>
            <Link to='/'>
                <img className='logo' src={logo} alt="Mary Varrodája logo, rajta egy varrótűvel amibe cérna van befűzve." />
            </Link>
            <ul>
                <li>
                    <Link className='menu-btn' to='/szolgaltatasok'>
                        <SzolgIcon className='icon' />
                        Szolgáltatásol
                    </Link>
                </li>
                <li>
                    <Link className='menu-btn' to='/termekek'>
                        <TermIcon className='icon' />
                        Termékek
                    </Link>
                </li>
                <li>
                    <Link className='menu-btn' to='/rolam'>
                        <AboutIcon className='icon' />
                        Rólam
                    </Link>
                </li>
                <li>
                    <Link className='menu-btn' to='/kapcsolat'>
                        <ContactIcon className='icon phone-icon' />
                        Kapcsolat
                    </Link>
                </li>
            </ul>
        </nav>
    )
}



