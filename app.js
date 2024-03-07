const { HOST, PORT } = require("./config/index.js");
const express = require("express");
const app = express();

const router = require("./routes");
app.use("/", router);

app.listen(PORT, HOST, () => {
  console.log(`Running on ${HOST}:${PORT}`);
});

