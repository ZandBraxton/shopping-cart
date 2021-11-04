import '../styles/cart.css'
import { Cartitem } from './cartItem'
import { Close } from '@material-ui/icons'

export const CartSidebar = ({
    cart, 
    totalPrice, 
    setIsVisable, 
    incrementItem, 
    decrementItem,
    submitOrder,
    deleteItem
}) => {

    return (
        <div className="cart-sidebar">
            <Close 
                className="close" 
                style={{fontSize: 40}}
                onClick={() => setIsVisable(v => !v)}>click
            </Close>
            {cart.map((item) => (
                <Cartitem
                    item={item} 
                    key={item.id}
                    incrementItem={incrementItem}
                    decrementItem={decrementItem}
                    deleteItem={deleteItem
                }></Cartitem>))}
              {totalPrice === "0.00" ? 
              <span className="empty-cart">You have nothing in your cart</span> 
              : 
              <div className="checkout">
                <span className="total-price">Subtotal: ${totalPrice}</span>
                <button className="submit-order" onClick={submitOrder}>Submit Order</button>
              </div>
              }
        </div>
    )
}