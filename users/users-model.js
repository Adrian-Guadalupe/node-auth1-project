const db = require('../database/dbConfig.js')

const find = () => {
   return db('users').select('id', 'username')
}

const findBy = (filter) => {
   return db('users').where(filter)
}

async function add(user){
   const [id] = await db('users').insert(user, 'id')
   return findById(id)
}

const findById = (id) => {
   return db('users')
      .where({ id })
      .select('is', 'username')
      .first()
}

module.exports = {
   add,
   find,
   findBy,
   findById,
 };