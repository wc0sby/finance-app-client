const initialState = {
  error:'',
  cookie:'',
  loading:false,
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