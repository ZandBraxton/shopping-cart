import '../styles/homepage.css'

export const Homepage = () => {

return (
    <div className="home-background-wrapper">
        <h1 className="title">Make the Most of Ember</h1>
        <div className="home-grid-container">
            <div className="home-card">
                <img 
                src="https://media.osmology.co/wp-content/uploads/2020/01/04194500/Black-Oak-Scented-Candle-by-LA-Bruket-1-500x500.jpg"
                alt="candle1"
                />
                <p className="home-item-name">L:A Bruket</p>
            </div>
            <div className="home-card">
                <img
                src="https://i.pinimg.com/originals/62/3a/b6/623ab602df7083190bbc92d128262014.jpg"
                alt="candle2"
                />
                <p className="home-item-name">Oak Room Sea Salt & Jasmine</p>
            </div>
        </div>
    </div>
)


}