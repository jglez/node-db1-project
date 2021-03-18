// representation of the database
const { default: knex } = require('knex')
const db = require('../../data/db-config.js')

const getAll = () => {
  // Proper Knex syntax
  return db.select().table('accounts')

  // return db('accounts') // proper knex short hand
  // return db.raw(`SELECT * FROM accounts`) // raw SQL === BAD!
}

const getById = id => {
  // Proper Knex syntax
  return db('accounts').where({ id })

  // return db.raw(`
  //   SELECT * FROM accounts ---> this is better raw SQL
  //   WHERE id = ?`, [id])

  // return db.raw(`
  //   SELECT * FROM accounts 
  //   WHERE id = ${id} // ---> vulnerable to SQL injection attacks
  // `) // NEVER interpolate client data directly
  // SUPER BAD
}

const create = async account => {

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
