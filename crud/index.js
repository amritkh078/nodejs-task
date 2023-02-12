const express = require('express');
const dotenv = require('dotenv');
const connectToDb = require('./config/connectToDb');

connectToDb();

const app = express();

dotenv.config();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res)=>{
    res.json({Hello: 'world'})
})

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})