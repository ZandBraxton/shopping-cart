import { useEffect, useState } from 'react'

export const useCart = () => {
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)


    const addToCart = (name, img, id, price, quantity) => {
        const item = {name, img, id, key: id, price, quantity}
        const index = cart.findIndex((obj) => obj.id === item.id)
        if (index === -1) {
            //if item isn't found, just push to cart
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
        //if there's only one quantity left, delete the item from cart
        if (item.quantity === 1) {
            setCart(cart.filter(obj => obj.id !== item.id))
        } else {
            setCart(
            cart.map(obj => obj.id === item.id ?
                {...obj, quantity: obj.quantity - 1} : obj)
        )
        }
        
    }

    const deleteItem = (item) => {
        setCart(cart.filter(obj => obj.id !== item.id))
    }

    const submitOrder = () => {
        //flush cart
        setCart([])
    }

    useEffect(() => {
        //update total price
        let sum = 0
            cart.map((item) => {
                const value = item.price * item.quantity
                sum += value 
            })
            setTotalPrice(sum.toFixed(2))    
    }, [cart])




    return [
        cart, 
        totalPrice,
        addToCart,
        incrementItem,
        decrementItem,
        submitOrder,
        deleteItem
    ]
}