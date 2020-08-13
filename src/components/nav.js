import React, { Component } from 'react'
import Hamburger from './hamburger'
import {Link, withRouter} from 'react-router-dom'
import '../styles/nav.css'

class Nav extends Component{
  render(){
    const { pathname } = this.props.location
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
              <Link id='nav-link-1' to='/'>Learn More</Link>
            </li>
            <li>
              <Link 
                id='nav-link-2' 
                className=' nav-link-2 orange-text'  
                to={pathname==='/signin'?'/register':'/signin'}>
                  {pathname==='/signin'?'SignUp':'SignIn'}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

const NavWrappedWithRouter = withRouter(Nav)
export default NavWrappedWithRouter