import {
  FETCH_USERDATA_BEGIN,
  FETCH_USERDATA_SUCCESS,
  FETCH_USERDATA_FAILURE,
} from '../actions/getUserDataAction'

import {
  FETCH_CATEGORYDATA_BEGIN,
  FETCH_CATEGORYDATA_SUCCESS,
  FETCH_CATEGORYDATA_FAILURE,
} from '../actions/postCategoryAction'

const initialState = {
  userData:[],
  loading: false,
  error: null,
  entries: [],
  categories: []
}

export const userDataReducer = (state = initialState, action) => {
  switch (action.type){
    case FETCH_USERDATA_BEGIN:
    case FETCH_CATEGORYDATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_USERDATA_SUCCESS:
    case FETCH_CATEGORYDATA_SUCCESS:
      const {entries, categories, ...withOutEntries} = action.payload.data
      return {
        ...state,
        loading: false,
        error: null,
        userData: withOutEntries,
        entries: entries,
        categories: categories

      } 
    case FETCH_USERDATA_FAILURE:
    case FETCH_CATEGORYDATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        userData: []
      }
    default: 
      return state
  }
}

// export const getUserData = state => state.userData.data
// export const getUserDataPending = state => state.userData.loading
// export const getProductsError = state => state.userData.error