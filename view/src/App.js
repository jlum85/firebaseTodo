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

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

// si on désactive le thème on est par défaut en bleu
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#33c9dc",
      main: "#FF5722",
      dark: "#d50000",
      contrastText: "#fff",
    },
  },
});

function App() {
  // const [token, setToken] = useState(localStorage.getItem("AuthToken") || "");
  // console.log(token);

  return (
    <MuiThemeProvider theme={theme}>
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
    </MuiThemeProvider>
  );
}

export default App;
