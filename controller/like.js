const db = require('../config/db.js')
const like = {
    Increaselike: (req, res) => {
        db.query('UPDATE post SET likeno=likeno+1 WHERE email=? AND postid=?', [req.query.email, req.query.postid], (err, result) => {
            if (err) {
                console.log(err)
                res.json({
                    status: 500,
                    messeage: 'server error'
                })
            } else {
                db.query('INSERT INTO likes SET ?', {
                    email: req.query.to,
                    postid: req.query.postid,
                    likedata: req.query.from
                }, (error, result) => {
                    if (error) {
                        console.log(error)
                        res.send("something wrong")
                    } else {
                        res.json({
                            status: 200,
                            messeage: 'increase'
                        })
                    }
                })

            }
        })
    },
    Decreaselike: (req, res) => {
        db.query('UPDATE post SET likeno=likeno-1 WHERE email=? AND postid=?', [req.query.email, req.query.postid], (err, result) => {
            if (err) {
                console.log(err)
                res.json({
                    status: 500,
                    messeage: 'server error'
                })
            } else {

                db.query('DELETE FROM likes WHERE email=? AND likedata=? AND postid=?', [req.query.email, req.query.likedata, req.query.postid], (error, result) => {
                    if (error) {
                        console.log(error)
                        res.send("something wrong")
                    } else {
                        res.json({
                            status: 200,
                            messeage: 'decrease'
                        })
                    }
                })
            }
        })
    }
}
module.exports = like;