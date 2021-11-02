import '../styles/cart.css'
import { Cartitem } from './cartItem'
import { useEffect } from 'react'
import { Close } from '@material-ui/icons'


export const CartSidebar = ({cart, totalPrice, setIsVisable}) => {

useEffect(() => {
    console.log('sidebar component')
}, [cart])

    // const cartComponents = cart.map((item) => (
    //     <Cartitem item={item} key={item.id}></Cartitem>
    // ))

    return (
        <div className="cart-sidebar">
            <Close 
            className="close" 
            style={{fontSize: 40}}
            onClick={() => setIsVisable(v => !v)}>click</Close>
            {cart.map((item) => (
        <Cartitem item={item} key={item.id}></Cartitem>))}
        {totalPrice === 0 ? null : <span className="total-price">Subtotal: ${totalPrice}</span>}
        {/* <span className="total-price">Subtotal: ${totalPrice}</span> */}
        </div>
    )
}