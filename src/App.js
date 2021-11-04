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
    submitOrder
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

        {/* {isVisable ? <CartSidebar cart={cart} totalPrice={totalPrice}/> : ''} */}
        {transition((style, item) => 
        item ? <animated.div style={style} className="cart-sidebar">
            <CartSidebar 
              cart={cart} 
              totalPrice={totalPrice}
              setIsVisable={setIsVisable}
              incrementItem={incrementItem}
              decrementItem={decrementItem}
              submitOrder={submitOrder} />
        </animated.div> : ''
        )}
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shop">
                <Shoppage items={items}></Shoppage>
            </Route>
            <Route path="/shop/:id"
                render={(props) => 
                <Itempage 
                    props={props} 
                    items={items} 
                    addToCart={addToCart}
                    />
                  }/>
          </Switch>
          <Footer></Footer>
      </div>
    </Router>
  )
}

export default App