import {
  PLACE_ORDER_PENDING,
  PLACE_ORDER_SUCCESS,
  // FETCH_ORDERS_PENDING,
  // FETCH_ORDERS_SUCCESS,
  // UPDATE_ORDER_PENDING,
  // UPDATE_ORDER_SUCCESS,
} from '../actions/orders'

import { SHOW_ERROR } from '../actions/error'

function waiting(state = false, action) {
  switch (action.type) {
    // case FETCH_PRODUCTS_PENDING:
    //   return true

    // case FETCH_PRODUCTS_SUCCESS:
    //   return false

    case PLACE_ORDER_PENDING:
      return true

    case PLACE_ORDER_SUCCESS:
      return false

    case SHOW_ERROR:
      return false

    default:
      return state
    }
  }
  
  export default waiting