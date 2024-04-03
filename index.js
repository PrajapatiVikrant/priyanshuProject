const express = require('express')
const app = express()
const a = require('./data')
const db = require('./config/db')
const path = require('path')
const staticpath = path.join(__dirname, 'public')
    // const cookieParser = require('cookies-parser')
    // app.use(cookieParser())
app.use(express.static(staticpath))
app.get('/', (req, res) => {
    res.sendFile('D:/Programming/project-start/public/login.html')
})

app.get('/Username', (req, res) => {
    res.json({
        Name: a[0].Name,
        Email: a[0].Email,
        Post: a[0].Post,
    })
})
app.use('/socialmedia', require('./Route'))
app.post('/signup', (req, res) => {
    // db.query('CREATE TABLE auth (name VARCHAR(255),email VARCHAR(255),password VARCHAR(255))', (err, result) => {
    //     res.send(result)
    // })

    db.query(`INSERT INTO auth (name,email,password) VALUES`)
})

app.listen(3000, () => {
    console.log('app listening on port 3000 ')


})