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
    dispatch(fetchUserDataBegin())
    fetch(url)
    .then(res=>res.json())
    .then(
      data=>{
        if (data.error){
          throw(data.error)
        }
        dispatch(fetchUserDataSuccess(data))
        return data
      })
    .catch(reject=>{
        dispatch(fetchUserDataFailure(reject))
      }
    )
  }
}


