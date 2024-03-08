const { HOST, PORT } = require("./config/index.js");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(morgan("common"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PATCH",
    credentials: true,
  })
);

const router = require("./routes");
app.use("/", router);

app.listen(PORT, HOST, () => {
  console.log(`Running on ${HOST}:${PORT}`);
});
