import { getCakes } from '../apis/cakes'

export const SET_CAKES = 'SET_CAKES'

export function setCakes (cakes) {
  return {
    type: SET_CAKES,
    cakes
  }
}

export function fetchCakes () {
  return dispatch => {
    return getCakes()
      .then(cakes => {
        dispatch(setCakes(cakes))
        return null
      })
  }
}
