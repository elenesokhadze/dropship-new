import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main/Main";
import LandingPage from "./LandingPage/LandingPage";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import Menu from "./Menu/Menu";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/dropship">
            <Menu />
            <p>Elene</p>
          </Route>
          <Route path="/user">
            <Menu />
          </Route>
          <Route path="/cart">
            <Menu />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Menu />
            <p>Elene</p>
          </Route>
          <Route path="/catalog/:id?">
            <Main />
          </Route>
          <Route path="/inventory">
            <Menu />
            <p>Elene</p>
          </Route>
          <Route path="/cart">
            <Menu />
            <p>Elene</p>
          </Route>
          <Route path="/orders">
            <Menu />
            <p>Elene</p>
          </Route>
          <Route path="/transactions">
            <Menu />
            <p>Elene</p>
          </Route>
          <Route path="/store">
            <Menu />
            <p>Elene</p>
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
