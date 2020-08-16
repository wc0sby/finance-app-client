import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class SignUp extends Component{
  constructor(props){
    super(props);
    this.state = {
      form:{
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
      }
    }
  }

  addUser(){
    const {firstName, lastName, email, password} = this.state.form
    // when a valid token is stored, don't auth
    // don't post if username is blank
    this.setState({error:''})
    if (!email) {this.setState({error:'Email'})} 
    if (!password) {this.setState({error:'Password'})} 
    if (!email && !password) {this.setState({error:'Email and Password'})} 
    // return !password ? this.setState({error:'Password'}) : null
    // don't post if password is blank
    if (this.state.error === ''){
      const url = 'http://192.168.86.25:3001/users'
      const body = {
        firstName,
        lastName,
        username:email,
        password
      }
      const fetchParams = {
        mode:'cors',
        method: 'POST',
        headers:{
          'content-type': 'application/json',
          'accept':'application/json',
        },
        body: JSON.stringify(body)
      }
      fetch(url,fetchParams)
      .then(res=>res.json())
      .then(
        (data)=>{
          console.log(data)
          // document.cookie = data
        },
        (reject)=>console.log(reject)
      )      
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
                <div className="form-button orange-background" onClick={()=>this.addUser()}>Register</div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}