const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
      const commentData = await Comment.findAll({
        include:[User]
      });
     
    // Serialize data so the template can read it
    const post = commentData.map((comment) => comment.get({ plain: true }));

    res.render('comment-post', { 
        commments, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

    // New comment 
    router.post('/', withAuth, async (req, res) => {
        try {
          const newComment = await Comment.create({
            ...req.body,
            username: req.session.username,
          });
      
          res.status(200).json(newComment);
        } catch (err) {
          res.status(400).json(err);
        }
      });
      
module.exports = router;