import { useEffect, useState } from 'react'

export const useCart = () => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)


   
    const addToCart = (name, img, id, price, quantity) => {
        const item = {name, img, id, key: id, price, quantity}
        const index = cart.findIndex((obj) => obj.id === item.id)
        if (index === -1) {
            //push to cart
            console.log('not found')
            setCart((prevState) => [...prevState, item])
        } else {
            //if item already in cart, set new quantity
            setCart(
                cart.map(obj => obj.id === item.id ?
                    {...obj, quantity: item.quantity} : obj)
            )
        }
        return cart
    }


    const incrementItem = (item) => {
        setCart(
            cart.map(obj => obj.id === item.id ?
                {...obj, quantity: obj.quantity + 1} : obj)
        )
    }

    const decrementItem = (item) => {
        if (item.quantity === 1) {
            setCart(cart.filter(obj => obj.id !== item.id))
        } else {
            setCart(
            cart.map(obj => obj.id === item.id ?
                {...obj, quantity: obj.quantity - 1} : obj)
        )
        }
        
    }

    const submitOrder = () => {
        setCart([])
    }
 

    useEffect(() => {
        let sum = 0
            cart.map((item) => {
                sum += Math.round((item.price * item.quantity) * 100) / 100
            })
            setTotalPrice(sum)    
    }, [cart])




    return [
        cart, 
        totalPrice,
        addToCart,
        incrementItem,
        decrementItem,
        submitOrder
    ]
}