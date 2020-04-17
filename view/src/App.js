import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";
import login from "./pages/login";
import signup from "./pages/signup";
import Home from "./pages/home";

function App() {
  // const [token, setToken] = useState(localStorage.getItem("AuthToken") || "");
  // console.log(token);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={login} />
          <Route exact path="/signup" component={signup} />
          {/* <Route exact path="/">
            {token ? (component = { Home }) : <Redirect to="login" />}
          </Route> */}
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
