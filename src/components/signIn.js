import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchAuth} from '../redux/fetch/authFetch'

class SignIn extends Component{
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
    const {error, fetchAuth} = this.props
    // when a valid token is stored, don't auth
    // don't post if username is blank
    return fetchAuth(email, password, error)
  }

  formUpdate(e, Name){
    const signUpData = {...this.state.form}
    signUpData[Name] = e.target.value
    this.setState({form: signUpData})
  }

  authToContinue(){
    const { email, password } = this.state.form 
    if(this.props.cookie === null || !this.props.cookie){
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
    return <Redirect to="/dashboard"/>
  }

  render(){
    return this.authToContinue()
  }
}

const MSP = state => {
  const {error, cookie, loading} = state.auth
  return (
    {
      error,
      cookie,
      loading
    }
  )
}

const MDP = dispatch => {
  return {
    fetchAuth: (email, password, error)=>dispatch(fetchAuth(email, password, error))
  }
}


export default connect(MSP,MDP)(SignIn)
