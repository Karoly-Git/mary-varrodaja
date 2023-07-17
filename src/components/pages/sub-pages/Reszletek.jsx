import React from 'react';

export default function Reszletek(props) {
    return (
        <div className='reszletek'>
            <h1>{props.h1}</h1>
            {props.data.map((element, index) => (
                <article key={'article' + index} className={props.isRowReverse ? 'flipped' : ''} >
                    <div className='container'>
                        <h3>{element.title}</h3>
                        {props.data[index].details.map((pharagraph, detailIndex) => (
                            <section key={detailIndex}>
                                <div className='text-box'>
                                    <p>{pharagraph}</p>
                                </div>
                            </section>
                        ))}
                    </div>
                    <img src={element.images.page.src} alt={element.images.page.alt} />
                </article>
            ))}
        </div>
    );
}
