import * as JWT from 'jwt-decode'
import {
  fetchUserDataBegin,
  fetchUserDataSuccess,
  fetchUserDataFailure
} from '../actions/getUserDataAction'

export const decodeToken = (token) => {
  const information = JWT(token)
  return information
}

export const fetchUserData = (id, option) => {
  const url = `http://localhost:3001/users/${id}`
  return dispatch => {
    //initiate fetchUserDataBegin Action
    dispatch(fetchUserDataBegin())
    //try to fetch...
    fetch(url)
    .then(res=>res.json())
    .then(
      data=>{
        const {password, ...objWithoutPassword} = data
        
        if (data.error){
          //throw error and go to catch
          throw(data.error)
        }
        //If we are here, we have success
        //initiate fetchUserDataSuccess action
        dispatch(fetchUserDataSuccess(objWithoutPassword))
        return objWithoutPassword
      })
      .catch(reject=>{
        //if we are here, we have an error
        //initiate the error action
        dispatch(fetchUserDataFailure(reject))
      }
    )
  }
}


