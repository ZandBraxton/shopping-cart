import '../styles/nav.css'
import { Link } from 'react-router-dom'
import { ShoppingCart } from '@material-ui/icons'

export const Navbar = () => {
    

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
                <ShoppingCart 
                className="cart"
                style={{fontSize: 60}}
                />
            </ul>
        </nav>
    )
}