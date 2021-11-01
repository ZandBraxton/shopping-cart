import { useEffect, useState } from 'react'

export const useCart = () => {
    const [cart, setCart] = useState([])


    const addToCart = (item) => {
        setCart((prevState) => [...prevState, item])
        return cart
    }

    useEffect(() => {
        console.log(cart)
    }, [cart])




    return [cart, addToCart]
}