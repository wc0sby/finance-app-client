import {combineReducers} from 'redux';
import {userDataReducer} from './UserDataReducer'
//JS default parmaeter relates to the state = []
// this is an ES6 thing that sets state to an empty array when undefined
// the data type can be anything, it's just setting the default value when somehting is incorrectly passed
const test = (state = [], action)=>state
const rootReducer = combineReducers({
  test, userData:userDataReducer
});
export default rootReducer