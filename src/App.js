import { Navbar } from "./Components/nav"
import { Homepage } from "./Components/home"
import { Shoppage } from "./Components/shop"
import { Itempage } from "./Components/item"
import { useCart } from "./Components/useCart"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './styles/global.css'

const App = () => {
  const [cart, setCart] = useCart()

  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shop" component={Shoppage} />
            <Route path="/shop/:id" component={Itempage} />
          </Switch>
      </div>
    </Router>
  )
}

export default App