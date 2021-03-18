// representation of the database
const db = require('../../data/db-config.js')

const getAll = () => {
  return db.raw(`SELECT * FROM accounts`)
}

const getById = id => {
  return db.raw(`
    SELECT * FROM accounts
    WHERE id = ${id}
  `)
}

const create = async account => {
  // DO YOUR MAGIC
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
