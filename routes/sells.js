const router = require("express").Router()

const index_sells = require("../controllers/products/index_sells.js")
router.get("/", index_sells)

module.exports = router