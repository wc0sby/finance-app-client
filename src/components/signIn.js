import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class SignIn extends Component{
  constructor(props){
    super(props);
    this.state = {
      form:{
        email:'',
        password:'',
      }
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
              <div className="form-button green-background">Login</div>
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
