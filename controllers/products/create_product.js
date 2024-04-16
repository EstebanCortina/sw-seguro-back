const Product = require("../../models/product_model.js");
module.exports = async (req, res) => {
  if (req.session.user_type_name !== "profesor") {
    res.status(403).send({ data: "forbidden" });
  }

  try {
    let product = new Product(req.body.name, req.body.price, req.body.stock);
    console.log(product);
    let response = await product.create();
    res.status(response.httpStatus).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
};
