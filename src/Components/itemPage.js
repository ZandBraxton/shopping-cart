import { useEffect, useState } from "react"
import { Remove } from "@material-ui/icons"
import { Add } from "@material-ui/icons"
import '../styles/item.css'

export const Itempage = (props) => {
    const [item, setItem] = useState({
        name: '',
        img: '',
        id: '',
        price: ''
    })
    const [quantity, setQuantity] = useState(1)

useEffect(() => {
    const itemDetail = props.items.filter((item) => item.id === props.props.match.params.id)
    setItem(itemDetail[0])
    console.log(quantity)
    console.log(item)
}, [item, props, quantity])



const addQuantity = () => {
    const value = quantity + 1
    setQuantity(value)
}

const removeQuantity = (e) => {
    const value = quantity - 1
    if (value < 1) {
        setQuantity(1)
    } else {
        setQuantity(value)
    }
}

const handleChange = (event) => {
    const value = parseInt(event.target.value)
    setQuantity(value)
}


    return (
        <div className="item-container">
            <h2 className="item-name">{item.name}</h2>
            <img
            className="item-img"
            src={item.img}
            alt={item.name}
            />
            <div>
                <Remove onClick={removeQuantity}/>
                    <input
                    type="number"
                    className="item-quantity"
                    value={quantity}
                    onChange={handleChange}
                    />
                <Add onClick={addQuantity}/>
            </div>


            <button onClick={() => props.addToCart(item, quantity)}>Add to cart</button>
        </div>
       
    )
    
    }