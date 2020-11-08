import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const PrivateRoute=({component:Component, ...rest})=>{
  return(
    <div>
      <Route
        {...rest}
        render={props=>(
          rest.cookie !== 'null' && rest.cookie
          ? <Component {...rest} />
          : <Redirect to="/signin"/>
        )}
      />
    </div>
  )
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

export default connect(MSP)(PrivateRoute)
