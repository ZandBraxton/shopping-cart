import { useEffect, useState } from 'react'

export const useCart = () => {
    const [cart, setCart] = useState([])


   
    const addToCart = (name, img, id, price, quantity) => {
        const item = {name, img, id, price, quantity}
        const index = cart.findIndex((obj) => obj.id === item.id)
        if (index === -1) {
            //push to cart
            console.log('not found')
            setCart((prevState) => [...prevState, item])
        } else {
            //change item in cart
            const newCart = cart
            newCart[index].quantity = item.quantity
            setCart(newCart)
            console.log("found")
        }
        console.log(index)
        console.log(cart)

        // setCart((prevState) => [...prevState, item])

        return cart
      


        
    }

    useEffect(() => {
        console.log(cart)
    }, [cart])




    return [cart, addToCart]
}