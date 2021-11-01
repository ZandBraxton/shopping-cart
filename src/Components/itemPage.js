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
    const [quantity, setQuantity] = useState(0)

useEffect(() => {
    const itemDetail = props.items.filter((item) => item.id === props.props.match.params.id)
    setItem(itemDetail[0])
   
    console.log(item)
}, [item, props])



const addQuantity = (e) => {
    setQuantity((prevState) => {
        const quantity = prevState + 1
        return quantity
    })
}

const handleChange = () => {

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
                <Remove/>
                    <input
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