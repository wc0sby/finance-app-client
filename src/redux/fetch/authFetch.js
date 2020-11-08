import {
    fetchAuthBegin
  , fetchAuthSuccess
  , fetchAuthFailure
} from '../actions/authAction'

export const fetchAuth = (email, password, error) => {
  return dispatch => {
    // const {email, password} = this.state.form
    // when a valid token is stored, don't auth
    // don't post if username is blank
    // this.setState({error:''})
    if (!email) {dispatch(fetchAuthFailure({error:'Email'}))} 
    if (!password) {dispatch(fetchAuthFailure({error:'Password'}))} 
    if (!email && !password) {dispatch(fetchAuthFailure({error:'Email and Password'}))} 
    // don't post if password is blank
    if (error === ''){
      const url = 'http://localhost:3001/user/login'
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
      dispatch(fetchAuthBegin())
      fetch(url,fetchParams)
      .then(res=>res.json())
      .then(
        (data)=>{
          document.cookie = `auth=${data}`
          dispatch(fetchAuthSuccess(data))
        },
        (reject)=>dispatch(fetchAuthFailure(reject))
      )      
    }
  }
}
