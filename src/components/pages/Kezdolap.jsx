import React from "react"
import { Link } from "react-router-dom"

import { szolgaltatasok as services } from "../../data/pages_data";

import { GiLargeDress as Dress } from "react-icons/gi";
import { ImScissors as Scissors } from "react-icons/im";
import { BiChild as Children } from "react-icons/bi";
import { GiSewingMachine as SewingMachine } from "react-icons/gi";
import ProductSlider from "../Product_slider";
import ReviewSlider from "../Review_slider";

const icons = [<Dress className="icon dress" />, <Scissors className="icon scissors" />, <Children className="icon children" />];

export default function Kezdolap() {
    return (
        <div className="kezdolap">
            <div className="main-box">
                <div className="card">
                    <h1>Női és Gyermekruha készítés</h1>
                    <div>
                        <div className="devider"></div>
                    </div>
                    <h2>Szabás, Varrás, Javítás</h2>
                </div>
            </div>

            <div className="description-box">
                <h2>
                    Üdvözöllek a Mary Varrodájában!
                </h2>
                <h3>
                    Szolgáltatásaim nemcsak ruhakészítésre terjednek ki, hozzám bizalommal fordulhatsz, ha ruha átalakításra vagy javításra van szükséged.
                </h3>
            </div>

            <div className="services-box">
                <Link to="/szolgaltatasok">
                    {services.data.map((service, serviceIndex) =>
                        <div key={"szolg" + serviceIndex} className="box">
                            <div className="icon-box">
                                {icons[serviceIndex]}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.short_description}</p>
                        </div>
                    )}
                </Link>
            </div>

            <ReviewSlider />

            <div className="description-box">
                <div className="icon-box">
                    <SewingMachine className="icon" />
                </div>
                <h2>
                    Kevés az egyforma!
                </h2>
                <h3>
                    Amennyiben kéred, tudok egyforma darabokat készíteni, amint azt a
                    <Link to={"/webshop"}>Webshopban</Link>
                    is láthatod, azonban termékeim nagy része mind egyedi, egyedi dizájnnal és mintával készül.
                </h3>
            </div>

            <ProductSlider />
        </div >
    )
}
