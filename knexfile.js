module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : 'ygp-back.ckt7e2sr9psq.eu-west-3.rds.amazonaws.com',
      user : 'postgres',
      password : 'password',
      port : '5433',
      database : 'postgres'
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  }
}