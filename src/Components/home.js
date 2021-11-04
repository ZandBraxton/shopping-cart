import { Link } from 'react-router-dom'
import '../styles/homepage.css'

export const Homepage = () => {

return (
    <div className="home-background-wrapper">
        <header className="hero-container">
            <img
                className="hero-image" 
                src="https://trimandathboy.files.wordpress.com/2020/12/adobestock_394225918.jpeg?w=1920&h=768&crop=1"
                alt="candle-header"
            />
            <div className="title-container">
                <h1 className="title">MAKE THE MOST OF EMBER</h1>
                <Link to="/shop">
                    <button className="hero-button">Shop now</button>
                </Link>  
            </div>
        </header>
        <h2 className="home-span">Latest Products</h2>
        <div className="home-grid-container">
            <Link to={`/shop/LA-Bruket`}>
                <div className="home-card">
                    <img 
                        src="https://media.osmology.co/wp-content/uploads/2020/01/04194500/Black-Oak-Scented-Candle-by-LA-Bruket-1-500x500.jpg"
                        alt="candle1"
                    />
                    <p className="home-item-name">L:A Bruket</p>
                </div>
            </Link>
            <Link to={`/shop/Oak-Room-Sea-Salt-&-Jasmine`}>
                <div className="home-card">
                    <img
                        src="https://i.pinimg.com/originals/62/3a/b6/623ab602df7083190bbc92d128262014.jpg"
                        alt="candle2"
                    />
                    <p className="home-item-name">Oak Room Sea Salt & Jasmine</p>
                </div>
            </Link>
        </div>
    </div>
)


}