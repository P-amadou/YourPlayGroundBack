require('dotenv').config()
module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : DB_HOST,
      user : DB_USER,
      password : DB_PASSWORD,
      port : DB_PORT,
      database : DB_DATABASE
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  }
}
