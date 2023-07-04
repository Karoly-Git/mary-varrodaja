import React from 'react'

export default function Kapcsolat() {
    return (
        <div className='kapcsolat'>
            <div id="email-form-box">
                <h1>Miben tudok segíteni?</h1>
                <p>
                    Szolgáltatásokkal és termékekkel kapcsolatos bármilyen kérdésed esetén állok szíves rendelkezésedre a
                    lent látható elérhetőségeim bármelyikén.
                </p>
                <form method="POST" action="/sendemail">
                    <input className="input" type="text" placeholder="Név*" name="sender_name" required />
                    <input className="input" type="tel" placeholder="Telefon" name="sender_phone" />
                    <input className="input" type="text" placeholder="Tárgy" name="subject" />
                    <input className="input" type="email" placeholder="Email" name="sender_email" />
                    <textarea className="area" placeholder="Ide írhatod az üzenetet*" name="message" required></textarea>
                    <button className="send-btn" type="submit" name="submit">Küld</button>
                </form>
            </div>

            <div id="contact-list-box">
                <h1>Elérhetőségeim:</h1>

                <ul id="contact-list">
                    <li>
                        <a href="tel:+3626390111">
                            <i className="fa-solid fa-phone"></i>
                            +36 26 390 111
                        </a>
                    </li>
                    <li>
                        <a href="tel:+36205112319">
                            <i className="fa-solid fa-mobile-screen-button"></i>
                            +36 20 511 2319
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://wa.me/+36205112319">
                            <i className="fa-brands fa-whatsapp"></i>
                            Mary Varrodája
                        </a>
                    </li>
                    <li>
                        <a id="address" target="_blank" rel="noopener noreferrer" href="https://www.google.hu/maps/place/Dunabogd%C3%A1ny,+Kossuth+Lajos+%C3%BAt+312,+2023+Magyarorsz%C3%A1g/@47.80205,19.0102433,17z/data=!3m1!4b1!4m5!3m4!1s0x476a80db29326d7f:0xf816991ef8d843a5!8m2!3d47.80205!4d19.012432">
                            <i className="fa-solid fa-location-dot"></i>
                            <div>
                                <div>&nbsp;Dunabogdány</div>
                                <div>&nbsp;Kossuth Lajos út 312.</div>
                                <div>&nbsp;2023</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
