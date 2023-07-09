import React from "react"
import { Link } from "react-router-dom"

import { szolgaltatasok } from "../../data/data";
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
                    Szolgáltatásaim nemcsak ruhakészítésre terjednek ki,
                    termékeim között találhatóak konyhai textil termékeket, és textil gyerek játékok is.
                </h3>
            </div>

            <div className="services-box">
                <Link to="/szolgaltatasok">
                    {szolgaltatasok.map((element, index) =>
                        <div key={"szolg" + index} className="box">
                            <div className="icon-box">
                                {icons[index]}
                            </div>
                            <h3>{element.title}</h3>
                            <p>{element.short_description}</p>
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
                    Nincs két egyforma!
                </h2>
                <h3>
                    Amennyiben kéred, természetesen tudok egyforma darabokat készíteni, amint azt a
                    <Link to={"/webshop"}>Webshopban</Link>
                    is láthatod, azonban termékeim mind egyediek, egyedi dizájnnal és mintával készülnek.
                </h3>
            </div>

            <ProductSlider />
        </div >
    )
}
