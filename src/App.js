import { Navbar } from "./Components/nav"
import { Homepage } from "./Components/home"
import { Shoppage } from "./Components/shop"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './styles/global.css'

const App = () => {


  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shop" component={Shoppage} />
          </Switch>
      </div>
    </Router>
  )
}

export default App