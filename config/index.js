require("dotenv");
const exec_query = require("../handlers/exec_query.js");
const db_handler = require("../models/db_hanlder.js");
db_handler.db = exec_query;
module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  HOST: process.env.HOST || "127.0.0.1",
  PORT: process.env.PORT || 3000,
};
