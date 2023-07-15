import React from "react"
import { Link } from "react-router-dom"

import { GiSewingMachine as SewingMachine } from "react-icons/gi";
import ProductSlider from "../Product_slider";
import ReviewSlider from "../Review_slider";

export default function Kezdolap(props) {
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
                <p>
                    Szolgáltatásaim nemcsak ruhakészítésre terjednek ki, hozzám bizalommal fordulhatsz, ha ruha átalakításra vagy javításra van szükséged.
                </p>
            </div>

            <div className="services-box">
                <Link to="/szolgaltatasok">
                    {props.website.szolgaltatasok.data.map((service, serviceIndex) =>
                        <div key={serviceIndex} className="box">
                            <div className="icon-box">
                                {service.icon}
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
                <p>
                    Büszke vagyok rá, hogy termékeim egyediek, egyedi dizájnnal és mintával készülnek.
                </p>
                <p>
                    Egyforma darabokat vagy sorozatot csak kérésre készítek, illetve a
                    <Link to={"/webshop"}>Webshopban</Link>
                    rendelhetőek egyforma darabok.
                </p>
            </div>

            <ProductSlider products={props.website.termekek.data} />
        </div >
    )
}
