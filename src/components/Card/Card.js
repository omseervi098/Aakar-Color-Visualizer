import React from 'react'
import "./card.css"

const Card = (props) => {
    [title, desc, img] = props
    return (
        <div className='carditem'>
            <h2>{title}</h2>
            <p>{desc}</p>
            <img src={img} alt="img" />
        </div>
    )
}

export default Card
