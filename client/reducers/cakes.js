import { SET_CAKES } from '../actions'

const initialState = []

const cakesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAKES:
      return action.cakes
    default:
      return state
  }
}

export default cakesReducer
