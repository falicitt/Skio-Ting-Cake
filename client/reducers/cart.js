const initialCart = []

const cartReducer = (state = initialCart, action) => {
  const { type, payload } = action

  switch (type) {
    case 'ADD_TO_CART': {
      // see if it exists
      const exists = state.find((beer) => beer.id === payload.id)

      if (exists) {
        return state.map((beer) => {
          if (beer.id === payload.id) {
            // return it with increased quantity
            beer.quantity++
            return beer
            // return {...beer, quantity: beer.quantity + 1}
          }
          // return beer
          else {
            return beer
          }
        })
      } else {
        return [...state, { ...payload, quantity: 1 }]
      }
    }
    case 'DELETE_FROM_CART':
      return state.filter((beer) => beer.id !== payload)

    

    default:
      return state
  }
}

export default cartReducer