const router = require("express").Router();
const clean_body = require("../middlewares/clean_body.js");

const sign_up_controller = require("../controllers/sign_up.js");
router.post("/", clean_body, sign_up_controller);

module.exports = router;
