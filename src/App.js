import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {ThemeProvider as MuiThemeProvider} from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
// Component
import Navbar from "./components/Navbar";
// Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";

const theme = createMuiTheme({
  palette: {
    light: "#33c9dc",
    main: "#00bcd4",
    dark: "#008394",
    contrastText: "#fff",
  },
  secondary: {
    light: "#ff6333",
    main: "#ff3d00",
    dark: "#b22a00",
    contrastText: "#fff",
  },
  typography: {
    useNextVariants: true
  }
});

function App() {
  return (
    <MuiThemeProvider>
      <div className="App">
        <Router>
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/login" component={login} />
              <Route exact path="/signup" component={signup} />
            </Switch>
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
