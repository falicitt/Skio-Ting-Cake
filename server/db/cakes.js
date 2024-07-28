const connection = require('./connection')

function getCakes (db = connection) {
  return db('cakes').select()
}

module.exports = {
  getCakes
}
