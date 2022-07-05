const ADD_TO_CART = 'ADD_TO_CART'
const DELETE_FROM_CART = 'DELETE_FROM_CART'

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