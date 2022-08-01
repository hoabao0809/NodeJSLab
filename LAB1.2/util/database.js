// ===== MySQL configuration set-up
// const mysql = require('mysql2');

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'node-complete',
//   password: 'admin1234',
// });

// module.exports = pool.promise()

// =========sequelize set-up
const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'admin1234', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
