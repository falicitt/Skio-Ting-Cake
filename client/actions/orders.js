import { postOrder, getOrders, patchOrderStatus } from '../apis/orders'
import { showError } from '../actions/error'

export const CREATE_ORDER = 'CREATE_ORDER'
export const PLACE_ORDER = 'PLACE_ORDER'
export const PLACE_ORDER_PENDING = 'PLACE_ORDER_PENDING'
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS'

export function placeOrderPending() {
  return {
    type: PLACE_ORDER_PENDING,
  }
}

export function placeOrderSuccess() {
  return {
    type: PLACE_ORDER_SUCCESS,
  }
}

export function createOrder(cart) {
  return {
    type: CREATE_ORDER,
    payload: cart
  }
}

export function placeOrder(cart, token) {
  return (dispatch) => {
    dispatch(createOrder(cart))
    dispatch(placeOrderPending())
    return postOrder(cart, token)
      .then(() => {
        dispatch(placeOrderSuccess())
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        dispatch(showError(errMessage))
      })
  }
}