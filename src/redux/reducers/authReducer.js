const initialState = {
  error:'',
  cookie:'',
  loading:false,
}

const getCookie=(name)=>{
  return document.cookie.split(';').some(i=> i.trim().startsWith(`${name}=`))
}

const deleteCookie=(name, path, domain)=>{
  console.log('deleting', getCookie(name))
  return getCookie(name) 
    ? (
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT`
    )
    : ''
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_AUTH':
      return {
        ...state,
        loading:true,
        error: ''
      }
    case 'FETCH_AUTH_SUCCESS':
      return {
        ...state,
        loading: false,
        error: '',
        cookie: action.payload
      }
    case 'FETCH_AUTH_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case 'SIGNOUTACTION':
      deleteCookie('auth')
      return {
        ...state,
        cookie: null
      }
  
    default:
      return {
        ...state,
        cookie: document.cookie
      }
  }
} 