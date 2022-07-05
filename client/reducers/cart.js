const initialCart = []

const cartReducer = (state = initialCart, action) => {
  const { type, payload } = action

  switch (type) {
    case 'ADD_TO_CART': {
      // see if it exists
      const exists = state.find((cake) => cake.id === payload.id)

      if (exists) {
        exists.quantity++
        // return state.map((cake) => {
        //   if (cake.id === payload.id) {
        //     // return it with increased quantity
        //     cake.quantity = cake.quantity + 1
        return [...state]
      } else {
        return [...state, { ...payload, quantity: 1 }]
      }
    }
    case 'DELETE_FROM_CART':
      return state.filter((cake) => cake.id !== payload)

    case 'INCREMENT_QUANTITY': {
      const item = state.find((cake) => cake.id === payload)
      // console.log('item', item)
      item.quantity++
      return [...state]
    }

    case 'DECREMENT_QUANTITY': {
      const item = state.find((item) => item.id === payload)
      if (item.quantity === 1) {
        return state.filter((cake) => cake.id !== payload)
      } else {
        item.quantity--
        return [...state]
      }
    }
    default:
      return state
  }
}

export default cartReducer
