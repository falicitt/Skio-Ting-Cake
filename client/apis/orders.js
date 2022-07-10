import request from 'superagent'

export function postOrder(order) {
  return request
    .post('api/v1/orders')
    .send(order)
    .then((res) => res.body)
}