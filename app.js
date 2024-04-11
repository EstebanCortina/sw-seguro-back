const { NODE_ENV, PORT, CORS_POLICY } = require("./config/index.js");
const redisSession = require("./config/redis.js");
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan(NODE_ENV === "prod" ? "combined" : "common"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.set("trust proxy", true);
app.use(CORS_POLICY);

//app.use(redisSession);

const router = require("./routes");
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
