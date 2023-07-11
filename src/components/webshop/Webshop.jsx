import React from 'react'
import { Link } from 'react-router-dom'

import { GoSearch as SearchIcon } from "react-icons/go";
import { BsCart4 as CartIcon } from "react-icons/bs";
import { MdOutlineNavigateNext as ArrowIcon } from 'react-icons/md'

import { termekek as products } from '../../data/data'

export default function Webshop() {
    return (
        <div className="webshop">
            <div className="shop">
                <div className="title-box">
                    <div className="box">
                        <h1>Online vásárlás</h1>
                        <nav>Home / Webshop / Oldal-1</nav>
                    </div>

                    <div className="result-filter">
                        <p>273 találat</p>
                        <form>
                            <select>
                                <option>ABC szerint növekvő</option>
                                <option>Sort by popularity</option>
                                <option>Sort by latest</option>
                                <option>Sort by price: low to high</option>
                                <option>Sort by price: high to low</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div class="container">
                    <div class="filter-box">
                        <section className='category-section'>
                            <h3>Kategóriák</h3>
                            <div className='devider'></div>
                            <ul className="product-categories">
                                {products.map((prod, prodIndex) => (
                                    prod.isActive &&
                                    <li key={prodIndex}>
                                        <Link to="/webshop">{prod.title}
                                            <span className="count">
                                                ({Math.trunc(Math.random() * 50) + 1})
                                            </span>
                                            <ArrowIcon className='icon' />
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
                            <h3>Szűrők</h3>
                            <div className='devider'></div>
                            <div>
                                <input type="range" min={1} max={100} ></input>
                            </div>
                        </section>

                        <section className='cart-section'>
                            <h3>Kosár</h3>
                            <div className='devider'></div>
                        </section>
                    </div>
                    <div className="grid">
                        {products.map((prod, prodIndex) => (
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
                <ul className="pagination">
                    {[1, 2, 3, "...", 11, 12, 13].map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
