const router = require("express").Router();
const clean_body = require("../middlewares/clean_body.js");
const random_delay = require("../middlewares/random_delay.js");

const sign_in_controller = require("../controllers/sign_in.js");
router.post("/", random_delay, clean_body, sign_in_controller);

module.exports = router;

