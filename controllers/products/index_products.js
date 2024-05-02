const Product = require("../../models/product_model.js");
module.exports = async (req, res) => {
  let response = await Product.index();
  res.status(response.httpStatus).send(response);
};
