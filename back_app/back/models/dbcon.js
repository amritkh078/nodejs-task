const sql = require('mssql/msnodesqlv8');

const config = {
    driver: 'msnodesqlv8',
    server: 'localhost',
    database: 'myDB',
    options: {
        trustedConnection: true,
        enableArithAbort: true,
    }
};

sql.connect(config, (err) => {
    if (err) throw err;
    else console.log('Connected');
})

module.exports = sql;
