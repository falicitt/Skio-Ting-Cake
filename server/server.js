const express = require('express')
const path = require('path')

const cakeRoutes = require('./routes/cakes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/cakes', cakeRoutes)

module.exports = server
