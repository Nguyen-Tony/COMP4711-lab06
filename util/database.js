const mysql = require('mysql2');

// connect to a database peoplebook running on your localmachine
const pool = mysql.createPool({
    host: 'us-cdbr-iron-east-05.cleardb.net',
    user: 'b74371a09040e9',
    database: 'heroku_a9188c2d383c734',
    password: 'e626471d'
});

module.exports = pool.promise();