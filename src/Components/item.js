import items from "../data/items"

export const Itempage = ({match}) => {
    const data = items.filter((item) => item.id === match.params.id)
    
    return (
        <div>
            <img
            src={data[0].img}
            alt="img"></img>
            <div>{data[0].name}</div>
        </div>
       
    )
    
    }