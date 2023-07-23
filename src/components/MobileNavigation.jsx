import React from 'react'
import { Link } from "react-router-dom"

export default function MobileNavigation(props) {
    return (
        <div className='mobile-navigation' style={{ marginTop: props.marginTop }}>
            <ul className="primary-menu">
                <li>
                    <Link onClick={props.toggleMenu} className="menu-btn" to="/">
                        Kezdőlap
                    </Link>
                </li>
                <li>
                    <Link onClick={props.toggleMenu} className="menu-btn" to="/szolgaltatasok">
                        Szolgáltatásol
                    </Link>
                </li>
                <li>
                    <Link onClick={props.toggleMenu} className="menu-btn" to="/rolam">
                        Rólam
                    </Link>
                </li>
                <li>
                    <Link onClick={props.toggleMenu} className="menu-btn" to="/termekek">
                        Termékek
                    </Link>
                </li>
                <li>
                    <Link onClick={props.toggleMenu} className="menu-btn" to="/gyik">
                        GyIK
                    </Link>
                </li>
                <li>
                    <Link onClick={props.toggleMenu} className="menu-btn" to="/kapcsolat">
                        Kapcsolat
                    </Link>
                </li>
            </ul>
        </div>
    )
}
