const { LIMITER } = require("../config/index.js");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).send(
    JSON.stringify({
      data: "Software seguro practica 1 api",
    })
  );
});

const sign_in_router = require("./sign_in.js");
router.use("/sign-in", LIMITER, sign_in_router);

const sign_up_router = require("./sign_up.js");
router.use("/sign-up", LIMITER, sign_up_router);

module.exports = router;
