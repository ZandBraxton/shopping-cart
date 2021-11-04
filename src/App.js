import { Navbar } from "./Components/nav"
import { Homepage } from "./Components/home"
import { Shoppage } from "./Components/shop"
import { Itempage } from "./Components/itemPage"
import { Footer } from "./Components/footer"
import { useCart } from "./Components/useCart"
import { CartSidebar } from "./Components/cart"
import { useState } from "react"
import { useTransition, animated } from 'react-spring'
import items from './data/items'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './styles/global.css'

const App = () => {
  const [
    cart, 
    totalPrice, 
    addToCart, 
    incrementItem, 
    decrementItem,
    submitOrder,
    deleteItem
  ] = useCart()
  const [isVisable, setIsVisable] = useState(false)
  const transition = useTransition(isVisable, {
    from: {opacity: 0},
    enter: {opacity: 1,},
    leave: {opacity: 0},
  })

  return (
    <Router>
      <div className="App">
        <Navbar 
          cart={cart} 
          setIsVisable={setIsVisable}
        />
        {/* transition effect for the cart to fade in */}
        {transition((style, item) => 
        item ? <animated.div style={style} className="cart-sidebar">
            <CartSidebar 
              cart={cart} 
              totalPrice={totalPrice}
              setIsVisable={setIsVisable}
              incrementItem={incrementItem}
              decrementItem={decrementItem}
              submitOrder={submitOrder}
              deleteItem={deleteItem} />
        </animated.div> : ''
        )}
          <Switch>
            <Route exact path="/shopping-cart/" component={Homepage} />
            <Route exact path="/shopping-cart/shop">
                <Shoppage items={items}></Shoppage>
            </Route>
            <Route path="/shopping-cart/shop/:id"
                render={(props) => 
                <Itempage 
                    props={props} 
                    items={items} 
                    addToCart={addToCart}
                />
                  }/>
          </Switch>
          <Footer/>
      </div>
    </Router>
  )
}

export default App