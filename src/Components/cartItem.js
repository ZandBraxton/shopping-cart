import { Remove } from "@material-ui/icons"
import { Add } from "@material-ui/icons"
import '../styles/cart.css'

export const Cartitem = ({item, incrementItem, decrementItem, deleteItem}) => {

    return (
        <div className="cart-item-container">
            <img
                className="cart-img"
                src={item.img}
                alt={item.name}/>

            <div className="cart-item-info">
                <span 
                    className="cart-name">
                    {item.name}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
                <div className="qty-handle">
                    <span>Qty: {item.quantity}</span>
                    <Remove className="qty-adjustment" onClick={() => decrementItem(item)}></Remove>
                    <Add className="qty-adjustment" onClick={() => incrementItem(item)}></Add>
                </div>
                <button 
                className="delete-item"
                onClick={() => deleteItem(item)}>Delete</button>
            </div>  
            
        </div>
    )


}