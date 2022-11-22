const express = require('express');
const Crud = require('./controller/crud');
const cors = require('cors');
const Router = require('./routes/route');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', Router);
app.use('/', Crud);

app.listen(8000, () => {
    console.log('Server started on port 8000');
});