import request from 'superagent'

export function postOrder(cart, orderDetails, token) {
  return request
    .post('api/v1/orders')
    .set('authorization', `Bearer ${token}`)
    .send({ cakePurchased: cart, ...orderDetails })
    .then((res) => res.body)
    .catch((error) => console.log(error))
}

export function getOrdersByUser(userId) {
  return request
    .get(`/api/v1/orders/user/${userId}`)
    .then((res) => {
      return res.body
    })
    .catch((err) =>
      console.log(err.message, 'error consuming api getOrdersByUser')
    )
}
