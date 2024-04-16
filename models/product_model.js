const db_handler = require("./db_hanlder.js");

class Product extends db_handler {
  static index() {
    return super
      .db(`SELECT * FROM products`)
      .then((results) => {
        return {
          httpStatus: 200,
          message: "Products index success",
          data: results,
        };
      })
      .catch((err) => err);
  }

  static get_last_sell_id() {
    return super
      .db("SELECT id FROM sells ORDER BY purchase_date DESC LIMIT 1")
      .then((res) => res[0].id);
  }

  static __make_sell(user_id, total) {
    return super
      .db("INSERT INTO sells (user_id, total) VALUES (?, ?)", [user_id, total])
      .then((result) => {
        return true;
      })
      .catch((err) => err);
  }

  static __make_sell_details(products, sell_id) {
    products.forEach((product) => {
      super
        .db(
          "INSERT INTO sell_details (sell_id, product_id, quantity) VALUES (?, ?, ?)",
          [sell_id, product.id, product.quantity]
        )
        .catch((err) => console.log(err));
    });
    return {
      httpStatus: 200,
      message: "Purchase success",
      data: "OK",
    };
  }

  static index_sells() {
    return super
      .db(`SELECT * FROM sells_view`)
      .then((results) => {
        return {
          httpStatus: 200,
          message: "Sells index success",
          data: results,
        };
      })
      .catch((err) => err);
  }

  constructor(name, price, stock) {
    super();
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  create() {
    return new Promise((resolve, reject) => {
      Product.db(
        "INSERT INTO products (name, price, img_url,stock) VALUES (?, ?, ?, ?)",
        Object.values(this)
      )
        .then((query_result) =>
          resolve({
            httpStatus: 201,
            message: "Create product success",
            data: this,
          })
        )
        .catch((err) => reject(err));
    });
  }
}

module.exports = Product;
