// Import Express
const express = require('express')

// Import Accounts Model
const Account = require('./accounts-model.js')

// Instantiate our Router
const router = express.Router()

/***** ACCOUNTS ENDPOINTS *****/

router.get('/', async (req, res, next) => {
  Account.getAll()
    .then(account => {
      res.status(200).json(account)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // CALL next(err) IF THE PROMISE REJECTS INSIDE YOUR ENDPOINTS
  res.status(500).json({
    message: 'something went wrong inside the accounts router',
    errMessage: err.message,
  })
})

// Expose our Accounts Router to the outer world
module.exports = router;
