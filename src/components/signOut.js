import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signOut} from '../redux/actions/authAction'
import { Redirect } from 'react-router-dom'

class SignOut extends Component{
  componentDidMount(){
    this.props.signOutAction()
  }
  render(){
    document.cookie = null
    return(
      <div>
        <Redirect to="/"/>
      </div>
    )
  }
}

const MDP = dispatch => {
  return {
    signOutAction: ()=>dispatch(signOut())
  }
}

export default connect(null,MDP)(SignOut)