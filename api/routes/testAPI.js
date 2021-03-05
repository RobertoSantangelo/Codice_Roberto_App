const express = require('express');
const { InsufficientStorage } = require('http-errors');
const router = express.Router();
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'santangelo96',
    database: 'prova'
})

router.get('/', (req, res, next) => {
    conn.query("SELECT * from users", (err, result) => {
        if(err) console.log(err);
        console.log(result);
        res.send(result);
    });
})

router.post('/', (req, res) => {
    console.log(req.body.username);
    conn.query(`INSERT INTO users (username, password) VALUES ("${req.body.username}", "${req.body.password}")`, (err) =>{
        if(err) console.log(err);
    })
})

module.exports = router;