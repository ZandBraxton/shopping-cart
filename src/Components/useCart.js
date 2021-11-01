import { useEffect, useState } from 'react'

export const useCart = () => {
    const [cart, setCart] = useState([])


    const addToCart = (item, quantity) => {
        setCart((prevState) => [...prevState, {item, quantity}])
        return cart
    }

    useEffect(() => {
        console.log(cart)
    }, [cart])




    return [cart, addToCart]
}