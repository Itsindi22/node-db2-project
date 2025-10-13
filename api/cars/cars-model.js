const knex = require('knex')

const db =knex({
  client:'splite3',
  connection:{
     filename: ''
})

const getAll = () => {
  // DO YOUR MAGIC
  return db('car')
}

const getById = () => {
  // DO YOUR MAGIC
}

const create = () => {
  // DO YOUR MAGIC
}
