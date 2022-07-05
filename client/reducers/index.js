import { combineReducers } from 'redux'

import cartReducer from './cart'
import cakesReducer from './cakes'

export default combineReducers({
  cakes: cakesReducer,

  cart: cartReducer
})
