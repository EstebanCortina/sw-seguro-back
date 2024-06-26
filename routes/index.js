const { LIMITER } = require("../config/index.js");
const clean_path_params = require("../middlewares/clean_path_params.js");
const validate_google_token = require("../middlewares/oauth2.js");
const authorizer = require("../middlewares/authorizer.js");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).send(
    JSON.stringify({
      data: "Software seguro practica 1 api",
    })
  );
});

const sign_in_router = require("./sign_in.js");
router.use("/sign-in", LIMITER, validate_google_token, sign_in_router);

const sign_up_router = require("./sign_up.js");
router.use("/sign-up", LIMITER, sign_up_router);

const logout_router = require("./logout.js");
router.use("/logout", logout_router);

const users_router = require("./users.js");
router.use("/users", authorizer, clean_path_params, users_router);

const products_router = require("./products.js");
router.use("/products", authorizer, products_router);

const sells_router = require("./sells.js")
router.use("/sells", authorizer, sells_router);

module.exports = router;
