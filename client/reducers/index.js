import { combineReducers } from 'redux'

import cartReducer from './cart'
// import cakesReducer from './cakes'
import loggedInUser from './loggedInUser'
import newOrder from './newOrder'
import errorMessage from './errorMessage'
import waiting from './waiting'
import Shipping from '../components/Shipping'

export default combineReducers({
  // cakes: cakesReducer,
  cart: cartReducer,
  loggedInUser: loggedInUser,
  newOrder,
  errorMessage,
  waiting,

})


