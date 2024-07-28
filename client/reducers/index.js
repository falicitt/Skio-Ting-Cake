import { combineReducers } from 'redux'

import cartReducer from './cart'
import loggedInUser from './loggedInUser'
import newOrder from './newOrder'
import errorMessage from './errorMessage'
import waiting from './waiting'

export default combineReducers({
  cart: cartReducer,
  loggedInUser: loggedInUser,
  newOrder,
  errorMessage,
  waiting
})
