import React, { Component } from 'react'

export default class SignIn extends Component{
  render(){
    return(
      <div className="auth-form">
        <h1 className="accent-text orange-text">Sign Up</h1>
        <div className="form-wrapper">
          <form action="submit">
            <div className="form-field" style={{display: 'flex', justifyContent: 'space-between'}}>
              <div style={{width: '45%'}}>
                <label className="green-text form-label" htmlFor="firstname">First Name:</label>
                <input type="text"/>
              </div>
              <div style={{width: '45%'}}>
                <label className="green-text form-label" htmlFor="lastname">Last Name:</label>
                <input type="text"/>
              </div>
            </div>
            <div className="form-field">
              <label className="green-text form-label" htmlFor="email">Email:</label>
              <input type="email"/>
            </div>
            <div className="form-field">
              <label className="green-text form-label" htmlFor="password">Password:</label>
              <input type="password"/>
            </div>
            <div className="form-field">
              <label className="green-text form-label" htmlFor="password">Confirm Password:</label>
              <input type="password"/>
            </div>
            <div className="form-button-container">
              {/* <div> */}
                <div className="form-button orange-background">Register</div>
              {/* </div> */}
            </div>
          </form>
        </div>
      </div>
    )
  }
}
