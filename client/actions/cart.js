const ADD_TO_CART = 'ADD_TO_CART'
const DELETE_FROM_CART = 'DELETE_FROM_CART'
const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY'
const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY'

export function addToCart(id, name, quantity) {
  return {
    type: ADD_TO_CART,
    payload: {
      id: id,
      name: name,
      quantity: quantity,
    },
  }
}

export function deleteFromCart(id) {
  return {
    type: DELETE_FROM_CART,
    payload: id,
  }
}

export function incrementQuantity(id) {
  return {
    type: INCREMENT_QUANTITY,
    payload: id,
  }
}

export function decrementQuantity(id) {
  return {
    type: DECREMENT_QUANTITY,
    payload: id,
  }
}
