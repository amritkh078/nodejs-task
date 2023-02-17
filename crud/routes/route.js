const express = require('express');
const db = require('../database/dbcon');

const router = express.Router();

// get route for home page with query string
router.get('/', (req, res) => {
    let sql = 'SELECT * FROM person';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})

// post 
router.post('/post', (req, res) => {
    let sql = `INSERT INTO person(name, phone) VALUES('${req.body.name}','${req.body.phone}')`;
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log("Post successful");
        res.send('Post successful');
    }
    )

})

module.exports = router;