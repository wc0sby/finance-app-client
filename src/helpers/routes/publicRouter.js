import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PublicRoute=({component:Component, restricted, ...rest})=>{
  console.log('public',document.cookie !== 'null' || !document.cookie)
  return(
    <div>
      <Route
        {...rest}
        render={props=>(
          (document.cookie !== 'null' || !document.cookie) && !restricted
          ? <Component {...rest} />
          : <Redirect to="/"/>
        )}
      />
    </div>
  )
}

export default PublicRoute