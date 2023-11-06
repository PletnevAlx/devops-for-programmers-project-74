// app/config/config.cjs

const config = {
  development: {
    // SQLite configuration
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    useNullAsDefault: true,
  },

  test: {
    // PostgreSQL configuration (uncomment and configure as needed)
    // client: 'postgresql',
    // connection: {
    //   host: process.env.DATABASE_HOST || '127.0.0.1',
    //   database: process.env.DATABASE_NAME || 'test',
    //   user: process.env.DATABASE_USERNAME || 'testuser',
    //   password: process.env.DATABASE_PASSWORD || 'testpassword',
    // },
    // migrations: {
    //   tableName: 'knex_migrations',
    //   directory: './data/migrations',
    // },
    // seeds: {
    //   directory: './data/seeds',
    // },
  },
};

module.exports = config;

