import request from 'superagent'

const rootUrl = '/api/v1'

export function getCakes () {
  return request.get(rootUrl + '/cakes')
    .then(res => {
      console.log('api', res.body)
      return res.body.cakes
    })
}
