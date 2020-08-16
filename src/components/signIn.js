import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class SignIn extends Component{
  constructor(props){
    super(props);
    this.state = {
      form:{
        email:'',
        password:'',
      },
      token:'',
      error:''
    }
  }

  // TODO: add form validation function for UI response

  logInAction(){
    const {email, password} = this.state.form
    // when a valid token is stored, don't auth
    // don't post if username is blank
    this.setState({error:''})
    if (!email) {this.setState({error:'Email'})} 
    if (!password) {this.setState({error:'Password'})} 
    if (!email && !password) {this.setState({error:'Email and Password'})} 
    // return !password ? this.setState({error:'Password'}) : null
    // don't post if password is blank
    if (this.state.error === ''){
      const url = 'http://192.168.86.25:3001/user/login'
      const body = {
        username: email,
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
          document.cookie = data
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
    const { email, password } = this.state.form
    return(
      <div className="auth-form">
        <h1 className="accent-text orange-text">Sign In</h1>
        {this.state.error 
          ? <p style={{margin:0, fontSize:12, color:'red', backgroundColor:'rgba(228, 42, 42, 0.25)', textAlign:'center'}}>
              {`${this.state.error} cannot be blank`}
            </p> 
          : null}
        <div className="form-wrapper">
          <form action="submit">
            <div className="form-field">
              <label className="green-text form-label" htmlFor="user">Email:</label>
              <input type="text" value={email} onChange={(e)=>this.formUpdate(e, 'email')}/>
            </div>
            <div className="form-field">
              <label className="green-text form-label" htmlFor="password">Password:</label>
              <input type="password" value={password} onChange={(e)=>this.formUpdate(e, 'password')}/>
            </div>
            <div className="form-button-container">
              <div className="form-button green-background" onClick={()=>this.logInAction()}>Login</div>
              <div>
                <label className="green-text form-label" htmlFor="Register">Don't have an account?</label>
                {/* <div> */}
                  <Link to='/register'>
                    <div className="form-button orange-background">Register</div>
                  </Link>
                {/* </div> */}
                {/* <div className="form-button orange-background" onClick={()=>this.props.regClick()}>Register</div> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
