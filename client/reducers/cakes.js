import { SET_CAKES } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAKES:
      return action.cakes
    default:
      return state
  }
}

export default reducer
