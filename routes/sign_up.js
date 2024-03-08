const router = require("express").Router();
const escape_body = require("../middlewares/escape_input.js");

const sign_up_controller = require("../controllers/sign_up.js");
router.post("/", escape_body, sign_up_controller);

module.exports = router;
