const connection = require('./connection')

module.exports = {
  addOrder,
}

function addOrder(orderRequest, db = connection) {
  // remove item names from order (we have the id)
  const order = orderRequest.map((item) => {
    return {
      id: item.id,
      quantity: item.quantity,
    }
  })

  const hasInvalidQuantity = order.some((item) => item.quantity === 0)
  if (hasInvalidQuantity) {
    return Promise.reject(
      new Error('INVALID ORDER: Quantity required for all items')
    )
  }
  // will only get here to insert if the order is valid
  const timestamp = new Date(Date.now())
  return db('orders')
    .insert({
      created_at: timestamp,
      status: 'pending',
    })
    .then(([id]) => addOrderLines(id, order, db))
  }

  function addOrderLines(id, order, db = connection) {
    const orderLines = order.map((item) => {
      return {
        order_id: id,
        product_id: item.id,
        quantity: item.quantity,
      }
    })
    return db('orders_products')
      .insert(orderLines)
      .then(() => null)
  }