require('dotenv').config();

module.exports = {
  cors: process.env.CORS,
  api: {
    port: process.env.API_PORT || 3000,
  },
  mongo: {
    host: process.env.MONGO_HOST,
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PASS,
    database: process.env.MONGO_DB,
  },
  email: {
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASSWORD,
    service: process.env.EMAIL_SERVICE
  }
}


/* module.exports = {
  remoteDB: process.env.REMOTEDB,
  cors: process.env.CORS,
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  mysql: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
  },
  mongo: {
    host: process.env.MONGO_HOST,
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PASS,
    database: process.env.MONGO_DB,
  },
  mysqlService: {
    host: process.env.MYSQL_SRV_HOST,
    port: process.env.MYSQL_SRV_PORT,
  },
  cacheService: {
    host: process.env.MYSQL_SRV_HOST,
    port: process.env.MYSQL_SRV_PORT,
  },
  post: {
    port: process.env.POST_PORT,
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASS,
  }
} */