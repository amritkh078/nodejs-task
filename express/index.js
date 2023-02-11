const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const app = express();

// load env variables
dotenv.config({path: './.env'});  // path to .env file
const PORT = process.env.PORT || 8000;

// log requests
app.use(morgan('tiny')); 

app.get('/', (req, res)=>{
    res.send('Crud App')
})

app.listen(PORT, ()=>{
    console.log(`Server is running on: http://localhost:${PORT}`)
})