import '../styles/nav.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    

    return(
        <nav className="nav-bar">
            <h3>Shopping Site</h3>
            <ul className="nav-links">
                <Link className="link-line" to="/">
                    <li>Home</li>
                </Link>
                <Link className="link-line" to="/shop">
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    )
}