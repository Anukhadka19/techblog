const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Create new post
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      title:req.body.title,
      body:req.body.description,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update post
router.put("/:id", withAuth, async (req,res) => {
  console.log(req.body, "Updated")
  try {
    const updatePost = await Post.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(updatePost);
  } catch (err) {
    res.status(400).json(err);
  }
})

// Delete post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        username: req.session.username,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No posts found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
