import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class SignUp extends Component{
  constructor(props){
    super(props);
    this.state = {
      form:{
        firstName:'test',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
      }
    }
  }

  formUpdate(e, Name){
    const signUpData = {...this.state.form}
    signUpData[Name] = e.target.value
    this.setState({form: signUpData})
  }


  render(){
    const {firstName, lastName, email, password, confirmPassword} = this.state.form
    return(
      <div className="auth-form">
        <h1 className="accent-text orange-text">Sign Up</h1>
        <div className="form-wrapper">
          <form action="submit">
            <div className="form-field" style={{display: 'flex', justifyContent: 'space-between'}}>
              <div style={{width: '45%'}}>
                <label className="green-text form-label" htmlFor="firstname">First Name:</label>
                <input type="text" value={firstName} onChange={(e)=>this.formUpdate(e, 'firstName')}/>
              </div>
              <div style={{width: '45%'}}>
                <label className="green-text form-label" htmlFor="lastname">Last Name:</label>
                <input type="text" value={lastName} onChange={(e)=>this.formUpdate(e, 'lastName')}/>
              </div>
            </div>
            <div className="form-field">
              <label className="green-text form-label" htmlFor="email">Email:</label>
              <input type="email" value={email} onChange={(e)=>this.formUpdate(e, 'email')}/>
            </div>
            <div className="form-field">
              <label className="green-text form-label" htmlFor="password">Password:</label>
              <input type="password" value={password} onChange={(e)=>this.formUpdate(e, 'password')}/>
            </div>
            <div className="form-field">
              <label className="green-text form-label" htmlFor="password">Confirm Password:</label>
              <input type="password" value={confirmPassword} onChange={(e)=>this.formUpdate(e, 'confirmPassword')}/>
            </div>
            <div className="form-button-container">
              <Link to='/register'>
                <div className="form-button orange-background">Register</div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}