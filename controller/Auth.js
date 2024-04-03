const db = require('../config/db.js')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const Auth = {


    //signup
    Signup: async(req, res) => {


        db.query('SELECT * FROM auth WHERE email=?', [req.query.email], async(err, data) => {
            console.log(data);
            if (!data[0]) {
                const hashpassword = await bcrypt.hash(req.query.password, 10);
                console.log(hashpassword)
                const sql = 'INSERT INTO auth SET ?';
                db.query(sql, { name: req.query.username, email: req.query.email, password: hashpassword }, (erro, result) => {
                    if (erro) {
                        console.log(erro)
                    } else {

                        res.json({
                            status: '200',
                            message: 'registration successfully'
                        })
                    }
                })
            } else {
                res.json({
                    message: "user aleady exist",

                })

            }
        })


    },


    // login

    Login: (req, res) => {
        db.query('SELECT * FROM auth WHERE email=?', [req.query.email], async(err, data) => {
            if (!data[0]) {
                res.json({
                    status: '404',
                    message: 'please create account'
                })
            } else {
                const passwordmatch = await bcrypt.compare(req.query.password, data[0].password)
                if (passwordmatch === true) {
                    const token = await jwt.sign(req.query, 'priyanshu', { expiresIn: '1h' })
                    console.log(token)

                    res.json({
                        status: '200',
                        message: 'login successfully',
                        token: token
                    })
                } else {
                    res.json({
                        status: '400',
                        message: 'incorrect password'
                    })
                }
            }
        })
    }
}
module.exports = Auth;