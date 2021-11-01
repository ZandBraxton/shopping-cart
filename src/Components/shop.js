import items from "../data/items"
import { ShopItem } from "./shopItem"
import '../styles/shoppage.css'



export const Shoppage = ({items}) => {

console.log(items)
    


        const shopItemComponents = items.map((item) => (
              <ShopItem 
                props={item} 
                key={item.id} />
        ))

    return (
        <div>
            <h1>Shoppage</h1>
            <div className="shop-container">
                {shopItemComponents}
            </div>
        </div>
    )
    
    
    }