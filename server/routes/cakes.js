const express = require('express')

const db = require('../db/cakes')

const router = express.Router()

router.get('/', (req, res) => {
  db.getCakes()
    .then(results => {
      res.json({ cakes: results }) 
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: err.message })
    })
      return null
    })
    


module.exports = router
