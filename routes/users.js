const router = require("express").Router();

const index_users_controller = require("../controllers/index_users.js");
router.get("/", index_users_controller);

const enable_controller = require("../controllers/enable.js");
router.patch("/:id/enable", enable_controller);

const disable_controller = require("../controllers/disable.js");
router.patch("/:id/disable", disable_controller);

module.exports = router;

