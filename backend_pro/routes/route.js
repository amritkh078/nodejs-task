import express from 'express';
import db from '../database/dbconfig.js';

const router = express.Router();

router.get('/', (req, res) => {
    let sql = 'SELECT * FROM user';
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})

//post request
router.post('/post', (req,res)=>{
    let sql = `INSERT INTO user(name, email, password) VALUES('${req.body.name}','${req.body.email}','${req.body.password}')`;
    db.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log("Post successful");
        res.send('Post successful');
    }
    )
})



export default router;