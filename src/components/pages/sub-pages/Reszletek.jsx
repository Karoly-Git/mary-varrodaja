import React from 'react';

export default function Reszletek(props) {
    return (
        <div className='reszletek'>
            <h1>{props.h1}</h1>
            {props.data.map((element, index) => (
                element.isActive &&
                <article key={'article' + index} className={props.isRowReverse ? 'flipped' : ''} >
                    <div className='container'>
                        {element.icon && <div className='icon-box'>{element.icon}</div>}
                        <h2>{element.title}</h2>
                        {props.data[index].details.map((pharagraph, detailIndex) => (
                            <section key={detailIndex}>
                                <div className='text-box'>
                                    <p>{pharagraph}</p>
                                </div>
                            </section>
                        ))}
                    </div>
                    <div className="img-box">
                        <img src={element.images.page.src} alt={element.images.page.alt} />
                    </div>
                </article>
            ))}
        </div>
    );
}
