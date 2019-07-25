
module.exports = {

  development: {
    dialect: 'postgres',
    connection: 'postgres://localhost/people',
    // migrations: {
    //   directory: './db/migrations'
    // },
    // seeds: {
    //   directory: './db/dev/seeds'
    // }
  },
  production: {
    dialect: 'postgres',
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DB_NAME
    // migrations: {
    //   directory: './db/migrations'
    // },
    // seeds: {
    //   directory: './db/prod/seeds'
    // }
  }
};
