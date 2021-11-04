import '../styles/footer.css'
import { Twitter } from '@material-ui/icons'
import { Facebook } from '@material-ui/icons'
import { Instagram } from '@material-ui/icons'

export const Footer = () => {


    return (
        <footer>
            <div className="footer-notes">
                <p className="footer-note">Privacy Policy</p>
                <p>|</p>
                <p className="footer-note">Disclaimer</p>
                <p>|</p>
                <p className="footer-note gap">Contact Us</p>
                <Twitter/>
                <Facebook/>
                <Instagram/>
                <p className="footer-note copyright">Candle Center <span>&copy;</span> 2021</p>
            </div>
        </footer>
    )
}