const Post = require('./model');

const findAllPosts = (req, res, next) => {
  Post.find()
    .then(posts => res.send(posts))
    .catch(err => {
      console.log(err)
      next("internal server error.")
    });
};

const findOnePost = (req, res, next) => {
  Post.findById(req.params.id)
    .then(post => {
      if (post) {
        res.send(post)
      } else {
        res.status(404).json({ error: 'post not found' });
      }
    })
    .catch(err => {
      console.error(err);
      next("internal server error");
    });
};

const addNewPost = (req, res) => {
  Post.add(req.body)
    .then(ids => res.status(201).json({ ids }))
    .catch(err => console.error(err));
};

const updatePost = async (req, res, next) => {
  try {
    const count = await Post.update(req.params.id, req.body);
    console.log('count ... = ', count);
    if (count > 0) {
      res.status(200).json({
        message: 'post successfully updated'
      });
    } else {
      res.status(404).json({ error: 'post not found.' });
    }
  } catch (err) {
    console.log(err);
    next("Internal Server Error")
  }
};

const deletePost = async (req, res, next) => {
  Post.remove(req.params.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json({
          message: 'post successfully deleted'
        });
      } else {
        res.status(404).json({ error: 'post not found' });
      }
    })
};

module.exports = {
  findAllPosts,
  findOnePost,
  addNewPost,
  updatePost,
  deletePost
};
