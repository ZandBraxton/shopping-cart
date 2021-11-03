import '../styles/nav.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from '@material-ui/icons'

export const Navbar = ({cart, setIsVisable}) => {
   const [cartCount, setCartCount] = useState(0)
   const [cartEmpty, setCartEmpty] = useState(true)


   useEffect(() => {
    let count = 0
    cart.map((item) => {
        count += item.quantity
    })
        if (count === 0) {
            setCartEmpty(true)
        } else {
            setCartEmpty(false)
        }
       setCartCount(count)
   }, [cart])

  
   
    return(
        <nav className="nav-bar">
            <ul className="nav-links">
                <Link className="link-line" to="/">
                    <li>Home</li>
                </Link>
                <h3>CandleCenter</h3>
                <Link className="link-line" to="/shop">
                    <li>Shop</li>
                </Link>
                <div className="cart-count-container">
                    <div className="cart-count-wrapper">
                        <ShoppingCart 
                            className="cart"
                            style={{fontSize: 60}}
                            onClick={() => setIsVisable(v => !v)}
                        ></ShoppingCart>
                        {cartEmpty ? '' : <span className="cart-count">{cartCount}</span>}
                    </div>
               

                    
        
               

                </div>
               
                
            </ul>
          
               
         
                
        </nav>
    )
}