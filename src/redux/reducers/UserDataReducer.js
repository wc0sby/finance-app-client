import {
  FETCH_USERDATA_BEGIN,
  FETCH_USERDATA_SUCCESS,
  FETCH_USERDATA_FAILURE
} from '../actions/getUserDataAction'

const initialState = {
  items:{},
  loading: false,
  error: null
}

export const userDataReducer = (state = initialState, action) => {
  switch (action.type){
    case FETCH_USERDATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_USERDATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        items: action.payload.data
      } 
    case FETCH_USERDATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      }
    default: 
      return state
  }
}

export const getUserData = state => state.userData.items
export const getUserDataPending = state => state.userData.loading
export const getProductsError = state => state.userData.error