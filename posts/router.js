const express = require('express');


// database access using knex
const db = require('../data/db-config.js');
const {
  findAllPosts,
  findOnePost,
  addNewPost,
  updatePost,
  deletePost
} = require('./controller');

const router = express.Router();

router.get('/', findAllPosts);
router.get('/:id', findOnePost);
router.post('/', addNewPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;