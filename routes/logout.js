const router = require("express").Router();

const logout_controller = require("../controllers/logout.js");
router.get("/", logout_controller);

module.exports = router;

