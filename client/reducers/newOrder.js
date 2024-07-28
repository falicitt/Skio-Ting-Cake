const initialOrder = null

const newOrder = (state = initialOrder, action ) => {
  const { type, payload } = action

  switch (type) {
    case 'CREATE_ORDER': {
      return payload
    }

    default:
      return state
  }
}

export default newOrder
