const router = require("express").Router();

const sign_in_controller = require("../controllers/sign_in.js");
router.get("/", sign_in_controller);

module.exports = router;

