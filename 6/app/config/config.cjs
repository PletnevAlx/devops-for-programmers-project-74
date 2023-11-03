module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './db.development.sqlite',
  },
  test: {
    dialect: 'postgres',
    host: process.env.DATABASE_HOST || '127.0.0.1',
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'password',
    database: process.env.DATABASE_NAME || 'postgres',
  },
  production: {
    // ваша конфигурация для продакшена
  },
};
