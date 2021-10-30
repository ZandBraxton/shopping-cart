import items from "../data/items"
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
console.log(props)



    
    
    const AddToCart = () => {

    }

    return (
        <div>
            <button>Add to cart</button>
            {/* <img
            src={data[0].img}
            alt="img"></img> */}
            {/* <div>{data[0].name}</div> */}
        </div>
       
    )
    
    }