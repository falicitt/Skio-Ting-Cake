import request from 'superagent'

export function postOrder(cart, orderDetails, token) {
  return request
    .post('api/v1/orders')
    .set('authorization', `Bearer ${token}`)
    .send({cakePurchased: cart, ...orderDetails})
    .then((res) => res.body)
    .catch(error => console.log(error))
}