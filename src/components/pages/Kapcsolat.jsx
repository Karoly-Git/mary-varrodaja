import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import Contacts from '../Contacts';

export default function Kapcsolat() {

    const navigate = useNavigate();

    const schema = yup.object().shape({
        senderName: yup.string().required("Add meg a nevet!"),
        senderPhone: yup.number(),
        subject: yup.string(),
        senderEmail: yup.string().email("It doesn't seem to be a valid email address!"),
        text: yup.string().required("Írj üzenetet!"),
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data, event) => {
        event.preventDefault();
        try {
            console.log('clicked before fetch');
            //const result = await fetch('http://localhost:8000/message',
            const result = await fetch('https://mary-varrodaja-17fc45017885.herokuapp.com/message',
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
                    <input placeholder="Név*" {...register('senderName')}></input>

                    <input placeholder="Telefon" {...register('senderPhone')}></input>

                    <input placeholder="Tárgy" {...register('subject')}></input>

                    <input placeholder="Email" {...register('senderEmail')}></input>

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
