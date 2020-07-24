import React from 'react';
import './App.css';

import Nav from './components/nav'
import Home from './components/home'
import Auth from './components/auth'

function App() {
  return (
    <div className={classNames}>
      <Nav/>
      {/* <Home/> */}
      <Auth/>
    </div>
  );
}

export default App;


const classNames = 'app-body full-height-grow'