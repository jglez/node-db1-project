// Import Express
const express = require('express')

// Import Accounts Model
const Account = require('./accounts-model.js')

// Instantiate our Router
const router = express.Router()

/***** ACCOUNTS ENDPOINTS *****/
// Get all accounts
router.get('/', async (req, res, next) => {
  Account.getAll()
    .then(accounts => {
      res.status(200).json(accounts)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// Get by ID
router.get('/:id', (req, res, next) => {
  const id = req.params.id

  Account.getById(id)
    .then(account => {
      res.status(200).json(account)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.post('/', (req, res, next) => {
  const newAccount = req.body

  Account.create()
    .then(account => {
      res.status(200).json(account)
    })

  console.log(newAccount)
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
