// Import library
const express = require("express")
const router = express.Router();

// Import All API Function
const Auth = require('./controller/Auth')
const Post = require('./controller/post')
const Like = require('./controller/like')
const comment = require('./controller/comment')
const allpage = require('./controller/allpage');
const middleware = require('./middleware/JWTverify')


// Authentication
router.post('/signup', Auth.Signup)
router.post('/login', Auth.Login)


//all pages
router.get('/home', allpage.home)
router.get('/mypost', allpage.mypost)



// Post operation
router.post('/postcreated', middleware, Post.CreatePost)
router.put('/postupdate', Post.UpdatePost)
router.get('/showpost', middleware, Post.ShowPost)
router.delete('/deletepost', Post.DeletePost)
router.get('/allpost', middleware, Post.showallpost)

// Like
router.put('/increaselike', Like.Increaselike)
router.put('/decreaselike', Like.Decreaselike)

//comment
router.post('/Createcomment', comment.Createcomment)


module.exports = router