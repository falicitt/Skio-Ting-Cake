const express = require('express')

const db = require('../db/orders')

const router = express.Router()

module.exports = router

router.post('/', (req, res) => {
  console.log(req.body)
  db.addOrder(req.body)
    .then(() => {
      res.status(201).send('order created')
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})