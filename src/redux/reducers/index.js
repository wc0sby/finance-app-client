//Use this location to combine reducers

import {combineReducers} from 'redux';
import {userDataReducer} from './UserDataReducer'
import {getEntryReducer} from './transactionReducer'
import {authReducer} from './authReducer'
//JS default parmaeter relates to the state = []
// this is an ES6 thing that sets state to an empty array when undefined
// the data type can be anything, it's just setting the default value when somehting is incorrectly passed
const rootReducer = combineReducers({
  userData:userDataReducer,
  transactionData:getEntryReducer,
  auth: authReducer
});
export default rootReducer