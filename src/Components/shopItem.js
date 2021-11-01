import '../styles/shoppage.css'
import { Link } from 'react-router-dom'

import React, { useState, useEffect } from 'react'
export const ShopItem = (props) => {
    const [item, setItem] = useState({
        name: '',
        img: '',
        id: '',
        quantity: '',
        price: ''
    })
    

    useEffect(() => {
        setItem({
            name: props.props.name,
            img: props.props.img,
            id: props.props.id,
            quantity: props.props.quantity,
            price: props.props.price
        })
    }, [props])

return (
    <div className="shop-item">
        <Link to={`/shop/${item.id}`}>
            <img
            className="shop-item-img"
            src={item.img} 
            alt="candle"/>
            <div className="shop-item-container">
                <h4 className="item-name">{item.name}</h4>
            </div>
         </Link>
    </div>
)
}

