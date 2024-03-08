const router = require("express").Router();
const escape_body = require("../middlewares/escape_input.js");

const sign_in_controller = require("../controllers/sign_in.js");
router.post("/", escape_body, sign_in_controller);

module.exports = router;

