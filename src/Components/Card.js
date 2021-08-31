import React from 'react'

 const Card = (props) => {
    return (
        <div className="card-contain">
            <img src={props.img} alt="productImage" />

            <div className="card-head">
             {props.head}
            </div>
            <div className="card-subhead">
             ${props.subhead}
            </div>
        </div>
    )
}

export default Card;