// representation of the database
const { default: knex } = require('knex')
const db = require('../../data/db-config.js')

const getAll = () => {
  return db.select().table('accounts')
  // return db('accounts') // knex short hand
  // return db.raw(`SELECT * FROM accounts`) // raw SQL === BAD!
}

const getById = id => {

  return db.raw(`
    SELECT * FROM accounts
    WHERE id = ${id}
  `)
}

const create = ({ name, budget }) => {

}

const updateById = async (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = async id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
