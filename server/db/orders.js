const connection = require('./connection')

module.exports = {
  addOrder,
  getOrders,
  getOrderByUser,
}

function addOrder(orderRequest, db = connection) {
  // remove item names from order (we have the id)
  orderRequest.cakePurchased = orderRequest.cakePurchased.map((item) => {
    return {
      id: item.id,
      quantity: item.quantity,
    }
  })
  // getOrderIdAndQuantity(orderRequest.cakePurchased) //

  const hasInvalidQuantity = orderRequest.cakePurchased.some(
    (item) => item.quantity === 0
  )
  if (hasInvalidQuantity) {
    return Promise.reject(
      new Error('INVALID ORDER: Quantity required for all items')
    )
  }
  // will only get here to insert if the order is valid
  console.log('orderRequest before insert', orderRequest)

  const timestamp = new Date(Date.now())
  return db('orders')
    .insert(
      {
        created_at: timestamp,
        status: 'pending',
        add_by_user: orderRequest.added_by_user,
        amount: orderRequest.totalPrice,
        phone: orderRequest.phone,
        pickup_date: orderRequest.date,
        pickup_time: orderRequest.time,
        shipping: orderRequest.shipping,
        payment: orderRequest.payment,
      },
      'id'
    )
    .then((idArr) => {
      const id = idArr[0]
      console.log('insert id return: ', id)
      addOrderLines(id, orderRequest.cakePurchased, db)
    })
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

function getOrders(db = connection) {
  return db('orders').select()
}

function getOrderByUser(user, db = connection) {
  return db('orders').where('add_by_user', user).select()
}

// HELPER FUNCS NOT EXPORTED
