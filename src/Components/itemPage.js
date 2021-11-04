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
    //find the item using the match params id
    const itemDetail = props.items.filter((item) => item.id === props.props.match.params.id)
    setItem(itemDetail[0])
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
        <div>
            <div className="item-container">
                <img
                    className="item-img"
                    src={item.img}
                    alt={item.name}
                />
                <div className="item-info">
                    <h2 className="item-name">{item.name}</h2>
                    <p className="item-price">${item.price}</p>
                    <div className="item-quantity-container">
                        <Remove
                            className="item-quantity-adjustment"
                            onClick={removeQuantity}
                        />
                        <input
                            type="number"
                            className="item-quantity"
                            value={quantity}
                            onChange={handleChange}
                        />
                        <Add
                            className="item-quantity-adjustment"
                            onClick={addQuantity}
                        />
                    </div>
                    <button
                    className="add-to-cart" 
                    onClick={() => props.addToCart(
                        item.name,
                        item.img,
                        item.id,
                        item.price,
                        quantity
                        )}>Add to cart
                    </button>
                </div>   
            </div>
            <div className="item-description">
                <p>
                    In vel leo a ligula convallis dignissim. Aliquam magna turpis, mattis vel mauris at, luctus maximus lacus. Fusce fermentum tincidunt magna, vitae ullamcorper elit volutpat et. Donec hendrerit elementum tincidunt.
                </p>
                <ul>
                    <li>Mauris commodo pharetra metus in venenatis. </li>
                    <li>Sed vitae sem vel elit posuere condimentum sed eu risus. Proin tortor felis, imperdiet sed nisi ac, convallis egestas felis. Suspendisse at mollis felis.</li>
                    <li>Etiam ultricies id ligula ac posuere.</li>
                </ul>
            </div>
        </div>
    )
    
    }