import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main/Main";
import LandingPage from "./LandingPage/LandingPage";
import LoginModal from "./authentication/loginModal";
import RegisterModal from "./authentication/RegisterModal";
import Logout from "./authentication/Logout";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login">
            <LoginModal />
          </Route>
          <Route path="/dropship">
            <p>Elene</p>
          </Route>
          <Route path="/user">
            <Logout />{" "}
          </Route>
          <Route exact path="/cart">
            <p>Elene</p>
          </Route>
          <Route path="/product/:productId?">
            <p>Elene</p>
          </Route>
          <Route exact path="/register">
            <RegisterModal />
          </Route>
          <Route path="/dashboard">
            <p>Elene</p>
          </Route>
          <Route path="/catalog">
            <Main />
          </Route>
          <Route path="/inventory">
            <p>Elene</p>
          </Route>
          <Route path="/cart">
            <p>Elene</p>
          </Route>
          <Route path="/orders">
            <p>Elene</p>
          </Route>
          <Route path="/transactions">
            <p>Elene</p>
          </Route>
          <Route path="/store">
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
