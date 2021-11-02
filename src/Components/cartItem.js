import '../styles/cart.css'

export const Cartitem = ({item}) => {

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
                <span>${item.price * item.quantity}</span>
                <span>Qty: {item.quantity}</span>
            </div>  
            
        </div>
    )


}