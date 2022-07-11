import request from 'superagent'

export function postOrder(order, token) {
  return request
    .post('api/v1/orders')
    .set('authorization', `Bearer ${token}`)
    .send(order)
    .then((res) => res.body)
    .catch(error => console.log(error))
}