import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Page from "./page/Page";
import Login from "./page/Login";
import KotakBulet from "./component/KotakBulet";
import Home from "./page/Home";
import Profil from "./page/Profil";
import Category from "./page/Category";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Page} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profil" component={Profil} />
        <Route exact path="/:category" component={Category} />
      </Switch>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
