import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/home';
import Buy from './pages/buy';
import Rent from './pages/rent';
import Property from './pages/property';
import About from './pages/about';
import Contact from './pages/contact';

import './css/bootstrap.min.css';
import './css/magnific-popup.css';
import './css/bootstrap-datepicker.css';
import './css/animate.css';
import './css/fl-bigmug-line.css';
import './css/aos.css';
import './css/style.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/buy" component={Buy}></Route>
          <Route path="/rent" component={Rent}></Route>
          <Route path="/property" component={Property}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;