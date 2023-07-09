import React from 'react'

export default function SubPageSzolg(props) {

    const data = props.data.find(element => element.title === props.szolgTitle);

    return (
        <div className='sub-page'>
            <h1>{data.sub_title}</h1>
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
