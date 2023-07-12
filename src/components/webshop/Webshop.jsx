import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { GoSearch as SearchIcon } from "react-icons/go";
import { BsCart4 as CartIcon } from "react-icons/bs";
import { MdOutlineNavigateNext as ArrowIcon } from 'react-icons/md'

import { SiContactlesspayment as ContactlessIcon } from 'react-icons/si'
import { FaApplePay as ApplePayIcon } from 'react-icons/fa'
import { FaGooglePay as GooglePayIcon } from 'react-icons/fa'
import { LiaCcMastercard as MasterCardIcon } from 'react-icons/lia'
import { LiaCcVisa as VisaCardIcon } from 'react-icons/lia'
import { GrVisa as VisaPayIcon } from 'react-icons/gr'
import { BsPaypal as PayPalIcon } from 'react-icons/bs'

import { termekek as products } from '../../data/data'

export default function Webshop() {

    const [isSorting, setIsSorting] = useState(false);

    const [maxPrice, setMaxPrice] = useState(0);

    const handleSliderChange = (e) => {
        setMaxPrice(e.target.value);
    };


    return (
        <div className="webshop">
            <div className="shop">
                <div className="title-box">
                    <div className="box">
                        <h1>Online vásárlás</h1>
                        <nav>Home / Webshop / Oldal-1</nav>
                    </div>

                    {false && <div className="result-filter">
                        <p>273 találat</p>
                        <form>
                            <select>
                                <option>ABC szerint növekvő</option>
                                <option>Népszerűség szerint</option>
                                <option>Ár szerint növekvő</option>
                                <option>Ár szerint csökeknő</option>
                            </select>
                        </form>
                    </div>}
                </div>

                <div className="container">
                    <div className="filter-box">
                        <section className='category-section'>
                            <h3>Kategóriák</h3>
                            <div className='devider'></div>
                            <ul className="product-categories">
                                {products.data.map((prod, prodIndex) => (
                                    prod.isActive &&
                                    <li key={prodIndex}>
                                        <Link to="/webshop">{prod.title}
                                            <span className="count">
                                                ({Math.trunc(Math.random() * 50) + 1})
                                            </span>
                                            {false && <ArrowIcon className='icon' />}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className='search-section'>
                            <h3>Keresés</h3>
                            <div className='devider'></div>
                            <div className='search-box'>
                                <input type="text" placeholder='Keresés...'></input>
                                <SearchIcon className='icon' />
                            </div>
                        </section>

                        <section className='filter-section'>
                            <h3>Ár</h3>
                            <div className='devider'></div>
                            <input onChange={handleSliderChange} type="range" min={0} step={100} max={25000}></input>
                            <div className="min-max">
                                <span className='min'>0 Ft</span>
                                <span className='max'>{maxPrice} Ft</span>
                            </div>
                        </section>

                        <section className='cart-section'>
                            <h3>Kosár</h3>
                            <div className='devider'></div>
                        </section>
                    </div>
                    <div className="grid">
                        {products.data.map((prod, prodIndex) => (
                            prod.isActive &&
                            <Link
                                className="link"
                                to="/webshop"
                                key={prodIndex}
                            >
                                <div className='box'>
                                    <h3>{prod.title}</h3>
                                    <h5>{Math.trunc(Math.random() * 50) + 1} termék</h5>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                {false && <ul className="pagination">
                    {[1, 2, 3, "...", 11, 12, 13].map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                    ))}
                </ul>}
            </div>
            <div className='webshop-info'>
                <ul className='accepted-payment-list'>
                    <li><ContactlessIcon className="icon contactless" /></li>
                    <li><ApplePayIcon className="icon apple-pay" /></li>
                    <li><GooglePayIcon className="icon google-pay" /></li>
                    <li><PayPalIcon className="icon paypal" /></li>
                    <li><VisaPayIcon className="icon visa-pay" /></li>
                    <li><MasterCardIcon className="icon master-card" /></li>
                    <li><VisaCardIcon className="icon visa-card" /></li>
                </ul>

                <nav className='info-navigation'>
                    <ul>
                        <li>
                            <Link to='/webshop'>Adatvédelem</Link>
                        </li>
                        <li>
                            <Link to='/webshop'>Vásárlási szerződés</Link>
                        </li>
                        <li>
                            <Link to='/webshop'>Szállítási információk</Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </div>
    )
}
