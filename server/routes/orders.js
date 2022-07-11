const express = require('express')

const db = require('../db/orders')

const router = express.Router()

const checkJWT = require('../auth0')


module.exports = router

router.post('/', checkJWT, async (req, res) => {
  console.log('order route', req.body[0])
  
  const auth0Id = req.user?.sub
  req.body[0].added_by_user = auth0Id
  
  db.addOrder(req.body)
    .then(() => {
      res.status(201).send('order created')
      return null
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})