import { combineReducers } from 'redux'

import cartReducer from './cart'
import cakesReducer from './cakes'
import loggedInUser from './loggedInUser'

export default combineReducers({
  // cakes: cakesReducer,
  cart: cartReducer,
  loggedInUser: loggedInUser
})
