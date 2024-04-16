const router = require("express").Router();

const index_products_controller = require("../controllers/products/index_products.js");
router.get("/", index_products_controller);

const create_product_controller = require("../controllers/products/create_product.js");
router.post("/", create_product_controller);

const buy_controller = require("../controllers/products/buy_products.js")
router.post("/buy", buy_controller)

module.exports = router;
