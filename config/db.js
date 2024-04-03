// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Shyam@2003',
    database: 'SocialMedia'
});
module.exports = connection
    // connection.connect((err) => {
    //     if (err) {
    //         console.log(err)
    //     } else {
    //         console.log("connected")
    //         connection.query("CREATE DATABASE SOCIALMEDIA");
    //         console.log("database created")
    //     }
    // })