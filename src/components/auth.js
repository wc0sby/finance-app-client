import React, { Component } from 'react'
import '../styles/auth.css'
import SignIn from './signIn'

export default class Home extends Component{
  render(){
    return(
      <div className='main-home'>
        <section className='left-home'>
          <div className='form-container'>
            <SignIn/>
          </div>
        </section>
        <section className='right-home'>
          <div className='img-wrapper'></div>
        </section>
        
      </div>
    )
  }
}