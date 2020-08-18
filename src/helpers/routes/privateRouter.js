import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute=({component:Component, ...rest})=>{
  return(
    <div>
      <Route
        {...rest}
        render={props=>(
          document.cookie
            ? <Component {...rest} />
            : <Redirect to="/signin"/>
        )}
      />
    </div>
  )
}

export default PrivateRoute