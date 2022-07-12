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

export function createOrder(cart, orderDetails) {
  return {
    type: CREATE_ORDER,
    payload: {
      cakePurchased: [...cart],
      phone: orderDetails.phone,
      date: orderDetails.date,
      time: orderDetails.time,
      shipping: orderDetails.shipping,
      payment: orderDetails.payment,
      totalPrice: orderDetails.totalPrice
    
    }
  }
}

export function placeOrder(cart, orderDetails, token) {
  return ((dispatch) => {
    dispatch(createOrder(cart, orderDetails))
    dispatch(placeOrderPending())

    // const order = {
    //   cakePurchased: [...cart],
    //   phone: orderDetails.phone,
    //   date: orderDetails.date,
    //   time: orderDetails.time,
    //   shipping: orderDetails.shipping,
    //   payment: orderDetails.payment,
    //   totalPrice: orderDetails.totalPrice
    
    // }
    return postOrder(cart, orderDetails, token)
    .then(() => {
        dispatch(placeOrderSuccess())
        return null
      })
      .catch((err) => {
        const errMessage = err.response?.text || err.message
        return dispatch(showError(errMessage))
      })
    } )
}