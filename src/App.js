import { Navbar } from "./Components/nav"
import { Homepage } from "./Components/home"
import { Shoppage } from "./Components/shop"
import { Itempage } from "./Components/itemPage"
import { useCart } from "./Components/useCart"
import items from './data/items'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './styles/global.css'

const App = () => {
  const [cart, addToCart] = useCart()

  return (
    <Router>
      <div className="App">
        <Navbar cart={cart} />
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
      </div>
    </Router>
  )
}

export default App