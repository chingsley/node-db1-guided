const express = require('express');

const PostRouter = require('./posts/router');

const server = express();

server.use(express.json());

server.use('/api/posts', PostRouter);

server.get('/', (req, res) => {
  res.send('<h3>DB Helpers with knex</h3>');
});

server.get('/*', (req, res) => {
  res.status(403).json({
    error: 'the specified endpoint does not exist in this server'
  })
});

server.use((err, req, res, next) => {
  res.status(500).json({ error: err });
})
module.exports = server;