const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'viacep_db',
 // host: process.env.DB_HOST,
  socketPath: process.env.DB_HOST || '/cloudsql/moto-academy-web:us-central1:via-cep',

});

module.exports = pool;
