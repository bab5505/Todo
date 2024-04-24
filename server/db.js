const Pool = require("pg").Pool;

const pool = new Pool({
  user: "robert",
  password: "cookers5",
  host: "localhost",
  port: 5432,
  database: "todos"
});

module.exports = pool;