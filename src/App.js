import { Switch, Route } from 'react-router-dom';
import React from "react";
import Home from "./components/Home";
import About from './components/About';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => (
  
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>

)

export default App;
