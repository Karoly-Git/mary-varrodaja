import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../img/logo.png'

export default function MainNavigation() {
    return (
        <nav className='main-navigation'>
            <Link to='/'>
                <img className='logo' src={logo} alt="Mary Varrodája logo, rajta egy varrótűvel amibe cérna van befűzve." />
            </Link>
            <ul>
                <li><Link to='/szolgaltatasok'>Szolgaltatasok</Link></li>
                <li><Link to='/termekek'>Termékek</Link></li>
                <li><Link to='/rolam'>Rolam</Link></li>
                <li><Link to='/kapcsolat'>Kapcsolat</Link></li>
            </ul>
        </nav>
    )
}
