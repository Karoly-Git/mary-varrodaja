import React from 'react';
import SectionDevider from '../../SectionDevider';

export default function Reszletek(props) {
    return (
        <div className='termek-reszletek'>
            <h1>{props.h1}</h1>
            {props.data.map((element, index) => (
                <article id={element.html_id} key={'article' + index}>
                    <div className='container'>
                        {props.data[index].details.map((detail, detailIndex) => (
                            <section key={detailIndex}>
                                <h3>{detail.title}</h3>
                                <div className='text-box'>
                                    {detail.pharagraps.map((pharagraph, pharIndex) => (
                                        <p key={pharIndex}>{pharagraph}</p>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                    <img src={element.img2} alt="" />
                </article>
            ))}
        </div>
    );
}
