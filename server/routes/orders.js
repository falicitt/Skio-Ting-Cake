const express = require('express')

const db = require('../db/orders')

const router = express.Router()

const checkJWT = require('../auth0')


module.exports = router

router.post('/', checkJWT, (req, res) => {
  console.log('order route', req.body)
  const {order} = req.body
  const auth0Id = req.user?.sub

  const newOrder = {...order, added_by_user: auth0Id}

  db.addOrder(newOrder)
    .then(() => {
      res.status(201).send('order created')
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})