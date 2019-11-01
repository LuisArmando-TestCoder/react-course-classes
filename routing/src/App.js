import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import User from './pages/User';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/about' component={About}/>
          <Route path='/user/:userID' component={User}/>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
