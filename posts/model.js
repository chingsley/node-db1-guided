const db = require('../data/db-config.js');

const find = () => db('posts');
const findById = id => db('posts').where({ id }).first();
const add = newPost => db('posts').insert(newPost, 'id');
const update = (id, changes) => db('posts').where({ id }).update(changes);
const remove = id => db('posts').where({ id }).del();

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};
