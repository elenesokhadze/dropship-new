import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./otherComponents/Dashboard/Dashboard";
import Dropship from "./otherComponents/Dropship/Dropship";
import Inventory from "./otherComponents/Inventory/Inventory";
import Orders from "./otherComponents/Orders/Orders";
import Transactions from "./otherComponents/Transactions/Transactions";
import Store from "./otherComponents/Store/Store";
import Main from "./Main/Main";
import LandingPage from "./LandingPage/LandingPage";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import User from "./User/User";
import Menu from "./Menu/Menu";
import Cart from "./Cart/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/dropship">
            <Menu />
            <Dropship />
          </Route>
          <Route path="/user">
            <Menu />
            <User />
          </Route>
          <Route path="/cart">
            <Menu />
            <Cart />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Menu />
            <Dashboard />
          </Route>
          <Route path="/catalog/:id?">
            <Main />
          </Route>
          <Route path="/inventory">
            <Menu />
            <Inventory />
          </Route>
          <Route path="/cart">
            <Menu />
            <p>Elene</p>
          </Route>
          <Route path="/orders">
            <Menu />
            <Orders />{" "}
          </Route>
          <Route path="/transactions">
            <Menu />
            <Transactions />
          </Route>
          <Route path="/store">
            <Menu />
            <Store />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
