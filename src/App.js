import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

import Nav from './components/nav'
import Home from './components/home'
import Auth from './components/auth'

export default function App() {
  return (
    <Router>
      <div className={classNames}>
        <Nav/>
        <Switch>
          <Route path="/signin">
            <Auth newUser={false}/>
          </Route>
          <Route path="/register">
            <Auth newUser={true}/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            Sorry - invalid link
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const classNames = 'app-body full-height-grow'