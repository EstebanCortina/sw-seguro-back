require("dotenv");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const exec_query = require("../handlers/exec_query.js");
const db_handler = require("../models/db_hanlder.js");
db_handler.db = exec_query;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message:
    "Demasiadas solicitudes desde esta dirección IP, por favor intenta nuevamente en 15 minutos.",
});

const cors_policy = cors({
  origin: "*",
  methods: "GET,POST,PATCH",
  credentials: true,
});

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  HOST: process.env.HOST || "127.0.0.1",
  PORT: process.env.PORT || 3000,
  LIMITER: limiter,
  CORS_POLICY: cors_policy,
};
