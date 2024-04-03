const { profile } = require('console')
const db = require('../config/db.js')
const post = {
    CreatePost: (req, res) => {
        const { postdata,title } = req.query;
        db.query('SELECT * FROM post WHERE postemail=?',[req.body.email],(err,postlength)=>{
           db.query('INSERT INTO post SET ?', {
           postemail:req.body.email,
           postTitle:title,
           postData:postdata,
           emailPostId:postlength.length+1
          }, (err, result) => {
           if(err){
              console.log(err)
               res.json({
                 status:500,
                 message:'server error'
              })
           }else {
               console.log(result)
               res.json({
               status:200,
               message:'post has created successfully'
           })
         }
       })
     })
    },
    UpdatePost: (req, res) => {
        db.query('UPDATE post SET postdata=? WHERE postemail=? AND emailPostId=?', [req.query.postdata, req.query.email, req.query.postid], (err, result) => {
            if (err) {
                console.log(err)
                res.json({
                    status: 500,
                    message: 'server error'
                })
            } else {
                console.log(result)
                res.json({
                    status: 200,
                    message: 'post has updated successfully'
                })
            }
        })
    },
    ShowPost: (req, res) => {
        db.query('SELECT * FROM post WHERE postemail=?', [req.body.email], (err, result) => {
            if (err) {
                console.log(err)
                res.json({
                    status: 400,
                    message: "Not found"
                })
            } else {

                db.query('SELECT name FROM auth WHERE email=?', [req.body.email], (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.json({
                            status: 200,
                            name: data[0].name,
                            data: result
                        })
                    }
                })
            }
        })
    },

    showallpost: (req, res) => {
        db.query('SELECT * FROM post', (err, result) => {
            if (err) {
                console.log(err)
            } else {
                db.query('SELECT name FROM auth WHERE email=?', [req.body.email], (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.json({
                            status: 200,
                            name: data[0].name,
                            data: result
                        })
                    }
                })

            }
        })
    },

    DeletePost: (req, res) => {
        db.query('DELETE FROM post WHERE email=? AND postid=?', [req.query.email, req.query.postid], (err, result) => {
            if (err) {
                console.log(err),
                    res.json({
                        status: 400,
                        message: 'chutiya bnaya tumko'
                    })
            } else {
                res.json({
                    status: 200,
                    message: `post ${req.query.postid} has deleted`
                })
            }
        })
    }

}

module.exports = post;