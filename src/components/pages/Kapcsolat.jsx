import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import Contacts from '../Contacts';

import config from "../../data/config.json"

export default function Kapcsolat() {

    const url = config.settings.isLocalServer ? config.urls.local_message : config.urls.heroku_message;

    const navigate = useNavigate();

    const schema = yup.object().shape({
        senderName: yup.string().required("Név megadása szükséges!"),
        senderPhone: yup.string(),
        subject: yup.string(),
        senderEmail: yup.string().email("Nem tűnik érvényes email címnek!"),
        text: yup.string().required("Elfelejtettél üzenetetet írni!"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data, event) => {
        event.preventDefault();
        try {
            const result = await fetch(url,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(data),
                }
            );

            //console.log(result);

            if (result.ok) {
                navigate('/success');
                //console.log('email sent');
            } else {
                navigate('/error');
            }

        } catch (err) {
            console.log(err.ok);
            navigate('/error');
        }
    };

    return (
        <div className='kapcsolat'>
            <div className="email-form-box">
                <h1>Miben tudok segíteni?</h1>
                <p>
                    Szolgáltatásokkal, termékekkel és egyéb kérdésekkel kapcsolatban állok szíves rendelkezésedre elérhetőségeim bármelyikén.
                </p>

                <form method="POST" action="/message" onSubmit={handleSubmit(onSubmit)}>
                    {errors.senderName && <span><p className='error'>{errors.senderName?.message}</p></span>}

                    <div className='wrapper'>
                        <input placeholder="Név*" {...register('senderName')}></input>

                        {errors.senderPhone && <span><p className='error'>{errors.senderPhone?.message}</p></span>}
                        <input placeholder="Telefon" {...register('senderPhone')}></input>
                    </div>

                    {errors.senderEmail && <span><p className='error over-break-point'>{errors.senderEmail?.message}</p></span>}

                    <div className='wrapper'>
                        <input placeholder="Tárgy" {...register('subject')}></input>

                        {errors.senderEmail && <span><p className='error under-break-point'>{errors.senderEmail?.message}</p></span>}
                        <input placeholder="Email" {...register('senderEmail')}></input>
                    </div>

                    {errors.text && <span><p className='error'>{errors.text?.message}</p></span>}
                    <textarea placeholder="Ide írhatod az üzenetet*" {...register('text')}></textarea>

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
