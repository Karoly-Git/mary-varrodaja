import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"

import { GoSearch as SearchIcon } from "react-icons/go";
import { BsCart4 as CartIcon } from "react-icons/bs";
import { MdOutlineNavigateNext as ArrowIcon } from 'react-icons/md'
import logo from "../img/logo_brown.png"

export default function MainNavigation() {

    const [scrollY, setScrollY] = useState(0);

    window.onscroll = () => {
        setScrollY(window.scrollY);
    }

    const scrollUpRef = useRef(null);

    const scrollUp = () => {
        scrollUpRef?.current.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <nav ref={scrollUpRef} className="main-navigation">
            <div
                onClick={scrollUp}
                className="scroll-up-btn"
                style={scrollY > 800 ? { right: '0' } : { right: '-3rem' }}
            >
                <ArrowIcon className="icon" />
            </div>
            <Link
                className="logo"
                to="/"
            >
                <img src={logo} alt="Mary Varrodája logo, rajta egy varrótűvel amibe cérna van befűzve." />
            </Link>
            <div className="container">
                <div className="box">
                    <ul className="primary-menu">
                        <li>
                            <Link className="menu-btn" to="/">
                                Kezdőlap
                            </Link>
                        </li>
                        <li>
                            <Link className="menu-btn" to="/szolgaltatasok">
                                Szolgáltatásol
                            </Link>
                        </li>
                        <li>
                            <Link className="menu-btn" to="/rolam">
                                Rólam
                            </Link>
                        </li>
                        <li>
                            <Link className="menu-btn" to="/termekek">
                                Termékek
                            </Link>
                        </li>
                        <li>
                            <Link className="menu-btn" to="/gyik">
                                GyIK
                            </Link>
                        </li>
                        <li>
                            <Link className="menu-btn" to="/kapcsolat">
                                Kapcsolat
                            </Link>
                        </li>
                    </ul>

                    {false && <ul className="secondary-menu">
                        <li>
                            <Link className="menu-btn" to="/webshop">
                                Webshop
                                <ArrowIcon className="icon" />
                            </Link>
                        </li>
                        <li>
                            <input type="text" placeholder="Keresés..." ></input>
                            <div className="shop-btn" to='/gyik'>
                                <SearchIcon className="icon search-icon" />
                            </div>
                            <div className="shop-btn" to='/gyik'>
                                <CartIcon className="icon" />
                            </div>
                        </li>
                    </ul>}
                </div>
            </div>
        </nav>
    )
}



