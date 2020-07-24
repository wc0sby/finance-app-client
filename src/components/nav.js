import React, { Component } from 'react'
import Hamburger from './hamburger'
import '../styles/nav.css'

export default class Nav extends Component{
  render(){
    return(
      <header>
        <div className='nav-logo'>
          <div className='nav-logo-img'></div>
          <div className='nav-logo-text'>
            Balanced
          </div>
        </div>
        <nav className = 'nav-main'>
          <Hamburger/>
          <ul className='nav-links'>
            <li>
              <a id='nav-link-1' href='/home'>Learn More</a>
            </li>
            <li>
              <a id='nav-link-2' className=' nav-link-2 orange-text' href='/home'>Sign In</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

