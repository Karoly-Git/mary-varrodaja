import React from 'react'
import { Link } from 'react-router-dom'

import { szolgaltatasok } from '../../data/data';
import { GiLargeDress as Dress } from 'react-icons/gi';
import { ImScissors as Scissors } from 'react-icons/im';
import { BiChild as Children } from 'react-icons/bi';
import Product_slider from '../Product_slider';
import Review_slider from '../Review_slider';

const icons = [<Dress className='icon dress' />, <Scissors className='icon scissors' />, <Children className='icon children' />];

export default function Kezdolap() {
    return (
        <div className='kezdolap'>
            <div className="main-box">
                <div className="card">
                    <h1>Női és Gyermekruha készítés</h1>
                    <div className="devider"></div>
                    <h2>Szabás, Varrás, Javítás</h2>
                </div>
            </div>

            <div className="services-box">
                <Link to='/szolgaltatasok'>
                    {szolgaltatasok.map((element, index) =>
                        <div key={'szolg' + index} className='box'>
                            <div className='icon-box'>
                                {icons[index]}
                            </div>
                            <h3>{element.title}</h3>
                            <p>{element.short_description}</p>
                        </div>
                    )}
                </Link>
            </div>
            <Review_slider />
            <Product_slider />
        </div >
    )
}
