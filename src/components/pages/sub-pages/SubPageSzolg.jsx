import React from 'react'
import { szolgaltatasok } from '../../../data/data'


export default function SubPageSzolg(props) {

    const data = szolgaltatasok.find(element => element.title === props.szolgTitle);

    return (
        <div className='sub-page'>
            <h1>{data.title}
            </h1>
            {data.details
                .map((detail, detailIndex) => (
                    <section key={detailIndex}>
                        <h2>{detail.title}</h2>
                        {detail.pharagraps.map((pharagraph, pharIndex) => (
                            <p key={pharIndex}>{pharagraph}</p>
                        ))}
                    </section>
                ))}
        </div>
    );
}
