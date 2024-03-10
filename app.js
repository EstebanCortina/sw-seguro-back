const { HOST, PORT, CORS_POLICY } = require("./config/index.js");
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("common"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(CORS_POLICY);

const router = require("./routes");
app.use("/", router);

app.listen(PORT, HOST, () => {
  console.log(`Running on ${HOST}:${PORT}`);
});
