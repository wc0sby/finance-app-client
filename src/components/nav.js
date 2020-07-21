import React, { Component } from 'react'
import logo from '../Logo.svg'
import '../styles/nav.css'

export default class Nav extends Component{
  render(){
    return(
      <header>
        <div className='nav-logo'>
          <img src={logo} alt="Logo"/>
          <div className='nav-logo-text'>
            Balanced
          </div>
        </div>
        <nav className = 'nav-main'>
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

