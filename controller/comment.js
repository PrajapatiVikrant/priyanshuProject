const db = require('../config/db.js')

const comment = {
    Createcomment: (req, res) => {
        db.query('INSERT INTO comment SET ?', {
            email: req.query.email,
            commentdata: req.query.commentdata,
            postid: req.query.postid,
            commentemail: req.query.commentemail
        }, (err, result) => {
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
                    message: 'commented'
                })
            }
        })
    },
    showcomment:async(req,res)=>{
        try {
            db.query('SELECT * FROM comment WHERE email=? AND postid=?',(err,data)=>{
                if(data){
                    res.json({
                        message:"success",
                        data:data
                    })
                 }else{
                    res.json({
                        message:err,
                    })
                 }
            })
        
          
        } catch (error) {
         console.log(error)
        }
          
     }
    
}

module.exports = comment;