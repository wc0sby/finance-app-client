import React, { Component } from 'react'

export default class SignIn extends Component{
  render(){
    return(
      <div className="auth-form">
        <h1 className="accent-text orange-text">Sign In</h1>
        <div className="form-wrapper">
          <form action="submit">
            <div className="form-field">
              <label className="green-text form-label" htmlFor="user">Email:</label>
              <input type="text"/>
            </div>
            <div className="form-field">
              <label className="green-text form-label" htmlFor="password">Password:</label>
              <input type="password"/>
            </div>
            <div className="form-button-container">
              <div className="form-button green-background">Login</div>
              <div>
                <label className="green-text form-label" htmlFor="Register">Don't have an account?</label>
                <div className="form-button orange-background">Register</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
