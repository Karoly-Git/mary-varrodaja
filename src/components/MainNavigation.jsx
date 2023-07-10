import React from "react"
import { Link } from "react-router-dom"

import { RiScissorsCutFill as SzolgIcon } from "react-icons/ri";
import { GiLargeDress as TermIcon } from "react-icons/gi";
import { IoMdContact as AboutIcon } from "react-icons/io";
import { BsTelephoneFill as ContactIcon } from "react-icons/bs";
import { GoSearch as SearchIcon } from "react-icons/go";
import { BsCart4 as CartIcon } from "react-icons/bs";
import { MdOutlineNavigateNext as Arrow } from 'react-icons/md'
import logo from "../img/logo_brown.png"

export default function MainNavigation() {
    return (
        <nav className="main-navigation">
            <Link to="/">
                <img className="logo" src={logo} alt="Mary Varrodája logo, rajta egy varrótűvel amibe cérna van befűzve." />
            </Link>
            <div className="container">
                <div className="box">
                    <ul className="primary-menu">
                        <li>
                            <Link className="menu-btn" to="/szolgaltatasok">
                                Szolgáltatásol
                            </Link>
                        </li>
                        <li>
                            <Link className="menu-btn" to="/termekek">
                                Termékek
                            </Link>
                        </li>
                        <li>
                            <Link className="menu-btn" to="/rolam">
                                Rólam
                            </Link>
                        </li>
                        <li>
                            <Link className="menu-btn" to="/kapcsolat">
                                Kapcsolat
                            </Link>
                        </li>
                    </ul>

                    <ul className="secondary-menu">
                        <li>
                            <Link className="menu-btn" to="/webshop">
                                Webshop
                                <Arrow className="icon" />
                            </Link>
                        </li>
                        <li>
                            <input type="text" />
                            <div className="shop-btn" to='/gyik'>
                                <SearchIcon className="icon" />
                            </div>
                            <div className="shop-btn" to='/gyik'>
                                <CartIcon className="icon" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}



