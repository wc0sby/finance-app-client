import {GET_TRANSACTIONS, CREATE_NEW_TRANSACTION} from '../actions/transactionActions'

export const getEntryReducer = (state={}, action) => {
  console.log(action, state)
  switch (action.type) {
    case GET_TRANSACTIONS:
      return action.payload
      
    case CREATE_NEW_TRANSACTION:
      console.log(action.payload.data)
      return {
        ...state,
        data: action.payload.data
  }
    default:
      return state;
  }

}