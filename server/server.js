const express = require('express')
const path = require('path')
const postgres = require('postgres')
require('dotenv').config()

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: 'require',
  connection: {
    options: `project=${ENDPOINT_ID}`
  }
})

async function getPgVersion () {
  const result = await sql`select version()`
  console.log(result)
}

getPgVersion()

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
