const express = require('express')
const path = require('path')

const cakeRoutes = require('./routes/cakes')
const ordersRoutes = require('./routes/orders')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/cakes', cakeRoutes)
server.use('/api/v1/orders', ordersRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.resolve('server/public/index.html'))
})

module.exports = server
