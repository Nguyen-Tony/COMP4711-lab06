const mysql = require('mysql2');

// connect to a database peoplebook running on your localmachine
const pool = mysql.createPool({
    host: '',
    user: '',
    database: '',
    password: ''
});
console.log("created connection");

module.exports = pool.promise();