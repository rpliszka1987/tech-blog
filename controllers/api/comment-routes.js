const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// Get all comments
router.get('/', (req, res) => {
    Comment.findAll()
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// Create a comment
router.post('/', (req, res) => {
    // Check for session
    if (req.session) {
        Comment.create(
            {
                comment_text: req.body.comment_text,
                post_id: req.body.post_id,
                // use the id fomr the session
                user_id: req.session.user_id
            }
        )
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });

    }
    
});

// Delete a post
router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCommentData => {
        if(!dbCommentData) {
            res.status(400).json({ message: 'No comment found with this id.'});
            return;
        }
        res.json(dbCommentData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

module.exports = router;