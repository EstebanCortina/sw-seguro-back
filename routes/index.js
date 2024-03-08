const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).send(
    JSON.stringify({
      data: "Software seguro practica 1 api",
    })
  );
});

const sign_in_router = require("./sign_in.js");
router.use("/sign-in", sign_in_router);

module.exports = router;
