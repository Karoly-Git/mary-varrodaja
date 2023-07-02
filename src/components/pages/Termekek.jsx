import React from 'react'

export default function Termekek(props) {
    return (
        <div className='termekek'>
            {props.data?.categories.map((category, index) =>
                <section key={'category' + index}>
                    <h3>{category.name}</h3>
                    <img style={{ width: '150px' }} src={props.category_images[category.name]} alt={''} ></img>
                    <p>{category.description}</p>
                </section>
            )}
        </div>
    )
}
