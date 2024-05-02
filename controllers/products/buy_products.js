const Product = require("../../models/product_model");

module.exports = async (req, res) => {
  let products = req.body;
  let total = (products) => {
    let sum = 0;
    products.forEach((product) => {
      sum += (product.price * product.quantity);
    });
    return sum;
  };

  try {
    await Product.__make_sell(req.session.user_id, total(products))
    let sell_id = await Product.get_last_sell_id()
    let response = await Product.__make_sell_details(products, sell_id)
    res.status(response.httpStatus).send(response)
  } catch (error) {
    console.log(error)
    res.status(500).send("server error")
  }
};
