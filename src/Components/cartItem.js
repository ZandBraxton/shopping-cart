import { Remove } from "@material-ui/icons"
import { Add } from "@material-ui/icons"
import '../styles/cart.css'

export const Cartitem = ({item, incrementItem, decrementItem}) => {

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
                <span>${Math.round((item.price * item.quantity) * 100) / 100}</span>
                <div className="qty-handle">
                    <span>Qty: {item.quantity}</span>
                    <Remove onClick={() => decrementItem(item)}></Remove>
                    <Add onClick={() => incrementItem (item)}></Add>
                </div>
            </div>  
            
        </div>
    )


}