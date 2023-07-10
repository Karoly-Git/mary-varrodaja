import React from 'react'
import Contacts from '../Contacts';

export default function Kapcsolat() {
    return (
        <div className='kapcsolat'>
            <div className="email-form-box">
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

            <div className="contact-list-box">
                <h2>Elérhetőségeim:</h2>

                <Contacts />

            </div>
        </div >
    );
}
