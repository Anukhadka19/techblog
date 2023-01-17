const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Get one post
router.get('/post/:id', withAuth, async (req, res) => {
    try {
  
      const onePost = Post.findByPk(
        req.params.id ,
        {
            include:[User]  
        })
        if (onePost){
            const post = (await onePost).get({plain:true});
            console.log(post);

            res.render('edit-post', {
                layout: 'dashboard',
                posts,
            });
            }
    
        } catch (err) {
                res.redirect('Login to edit post');
              }
            });
        
module.exposts = router;