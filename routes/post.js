const express = require('express');
const {createPosts, getDetail, getPosts, getUpdate, deletePost, searchPost} = require('../controllers/post.js')
const auth = require('../middleware/auth.js');

const router = express.Router();

router.get('/searchPost' , searchPost)
router.get('/getPosts' , getPosts)
router.post('/createPost' ,auth, createPosts)
router.get('/getDetail/:id' , getDetail)
router.patch('/getUpdate/:id' ,auth, getUpdate)
router.delete('/deletePost/:id' ,auth,  deletePost)





module.exports = router;