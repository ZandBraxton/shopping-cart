import '../styles/nav.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {



    return(
        <nav className="nav-bar">
            <ul className="nav-links">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    )
}