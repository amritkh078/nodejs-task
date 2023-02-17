const express = require('express');
const db = require('./database/dbcon');
const route = require('./routes/route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', route);


// listen to port 3000 if database is connected
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
    app.listen(5000, () => console.log('Listening on port 5000'));
}
);