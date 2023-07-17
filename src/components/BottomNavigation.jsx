import React from 'react'
import { Link } from 'react-router-dom'

export default function MainNavigation() {
    return (
        <nav className='bottom-navigation'>
            <ul>
                <li><Link to='/#/gyik'>GyIK</Link></li>
                <li><Link to='/#/kapcsolat'>Kapcsolat</Link></li>
            </ul>
        </nav>
    )
}
