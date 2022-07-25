const express = require('express')

const db = require('../db/orders')

const router = express.Router()

const checkJWT = require('../auth0')

module.exports = router

router.post('/', checkJWT, async (req, res) => {
  console.log('order route', req.body)

  const auth0Id = req.user?.sub
  req.body.added_by_user = auth0Id

  console.log('auth0id', auth0Id)

  db.addOrder(req.body)
    .then(() => {
      res.status(201).send('order created')
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/', async (req, res) => {
  db.getOrders()
    .then((orders) => res.json(orders))
    .catch((err) => res.status(500).json({ msg: err.message }))
})

router.get('/user/:id', (req, res) => {
  const userId = req.params.id
  db.getOrderByUser(userId)
    .then((cardArr) => res.json(cardArr))
    .catch((err) => res.status(500).json({ msg: err.message }))
})
