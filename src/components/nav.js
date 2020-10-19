import React, { Component } from 'react'
import {connect} from 'react-redux'
import Hamburger from './hamburger'
import {Link, withRouter} from 'react-router-dom'
import '../styles/nav.css'

class Nav extends Component{
  state = {
    authObject: {
      text:'',
      path:'',
    }
  }
  
  // componentDidMount(){
  //   this.getNavAuthAction(this.props.location.pathname, this.props.cookie)
  // }
  getNavAuthAction = (pathname, cookie) => {
    // const {authObject} = this.state
    // console.log(pathname, cookie, this.props)
    if (cookie === 'null' || !cookie){
      return {text:'SignIn', path:'/signin'}
      // const newState = {...authObject, text:'SignIn', path:'/signin'}
      // return this.setState({authObject: newState})

    }
    if (cookie !== 'null'){
      // const newState = {...authObject, text:'SignOut', path:'/signout'}
      // return this.setState({authObject: newState})
      return {text:'SignOut', path:'/signout'}
    }
    if (pathname === '/signin'){
      // const newState = {...authObject, text:'SignUp', path:'/register'}
      // return this.setState({authObject: newState})
      return {text:'SignUp', path:'/register'}
    }
    if (pathname === '/register'  || pathname === '/'){
      // const newState = {...authObject, text:'SignIn', path:'/signin'}
      // return this.setState({authObject: newState})
      return {text:'SignIn', path:'/signin'}
    }
  }

  render(){
    // const { pathname } = this.props.location
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
                to={this.getNavAuthAction(this.props.location.pathname, this.props.cookie).path}>
                  {/* display text */}
                  {this.getNavAuthAction(this.props.location.pathname, this.props.cookie).text}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

const MSP = state =>{
  const {cookie} = state.auth
  return (
    {
      cookie
    }
  )
}

const NavWrappedWithRouter = withRouter(Nav)
export default connect(MSP)(NavWrappedWithRouter)