import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./Components/LoginPage";
import Home from "./Components/Home";
import FormComponent from './Components/FormComponent'

export class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/form" component={FormComponent} />
        <Route exact path="/login" component={Login} />
      </Switch>
    );
  }
}

export default App;
