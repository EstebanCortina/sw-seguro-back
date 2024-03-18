const { NODE_ENV, PORT, CORS_POLICY } = require("./config/index.js");
const redisSession = require("./config/redis.js");
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan(NODE_ENV === "prod" ? "combined" : "common"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("trust proxy", true);
app.use(CORS_POLICY);

app.use(redisSession);

const router = require("./routes");
app.use("/", router);

app.get("/logout", (req, res) => {
  // Destruir la sesión actual
  req.session.destroy((err) => {
    if (err) {
      console.error("Error while logout:", err);
      res.status(500).send("Server Error");
    } else {
      res.status(200).send({
        httpStatus: 200,
        message: "Logout success",
        data: null,
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
