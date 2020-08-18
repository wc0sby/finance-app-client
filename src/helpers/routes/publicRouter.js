import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PublicRoute=({component:Component, restricted, ...rest})=>{
  return(
    <div>
      <Route
        {...rest}
        render={props=>(
          document.cookie && restricted
            ? <Redirect to="/dashboard"/>
            : <Component {...rest} />
        )}
      />
    </div>
  )
}

export default PublicRoute