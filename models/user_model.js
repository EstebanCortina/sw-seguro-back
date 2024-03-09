const db_handler = require("./db_hanlder.js");
class User extends db_handler {
  constructor(name, pass, user_type_name) {
    super();
    this.name = name;
    this.pass = pass;
    this.user_type_id = null;
    this.user_type_name = user_type_name;
  }
  create() {
    return new Promise((resolve, reject) => {
      this.__set_user_type_id(this.user_type_name)
        .then((user_type_id) => {
          if (user_type_id.length > 0) {
            this.user_type_id = user_type_id[0]["id"];
            User.db(
              "INSERT INTO users (name, pass, user_type_id) VALUES (?, ?, ?)",
              Object.values(this)
            )
              .then((query_result) =>
                resolve({
                  httpStatus: 201,
                  message: "Create user success",
                  data: this,
                })
              )
              .catch((err) => reject(err));
          } else {
            reject({
              httpStatus: 404,
              message: "User type name not found",
              data: [],
            });
          }
        })
        .catch((err) => reject(err));
    });
  }

  __set_user_type_id() {
    return User.db("SELECT id FROM user_types where name = ?", [
      this.user_type_name,
    ]);
  }
}

module.exports = User;
