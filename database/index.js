const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'amenra',
    password: 'password',
    database: 'todo_db'
  }
});

module.exports = knex;
