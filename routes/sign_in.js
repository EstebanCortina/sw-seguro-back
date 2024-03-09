const router = require("express").Router();
const clean_body = require("../middlewares/clean_body.js");

const sign_in_controller = require("../controllers/sign_in.js");
router.post("/", clean_body, sign_in_controller);

module.exports = router;

