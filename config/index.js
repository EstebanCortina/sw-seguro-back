require("dotenv");

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  HOST: process.env.HOST || "127.0.0.1",
  PORT: process.env.PORT || 3000,
  MYSQL_HOST: process.env.MYSQL_HOST || "127.0.0.1",
  MYSQL_PORT: process.env.MYSQL_PORT || 3308,
  MYSQL_USER: process.env.MYSQL_USER || "root",
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || "1234",
  MYSQL_DATABASE: process.env.MYSQL_DATABASE || "sw_dev",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};
