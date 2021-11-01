import { useEffect, useState } from "react"

export const Itempage = (props) => {
    const [item, setItem] = useState({
        name: '',
        img: '',
        id: '',
        quantity: '',
        price: ''
    })
    // const data = items.filter((item) => item.id === match.params.id)
// console.log(props)

useEffect(() => {
    const itemDetail = props.items.filter((item) => item.id === props.props.match.params.id)
    console.log(itemDetail[0])
    setItem(itemDetail[0])
    console.log(props)
   
    console.log(item)
}, [item])


    return (
        <div>
            <button onClick={() => props.addToCart(item)}>Add to cart</button>
            <p>{item.name}</p>
        </div>
       
    )
    
    }