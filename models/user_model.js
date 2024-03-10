const db_handler = require("./db_hanlder.js");
class User extends db_handler {
  static index() {
    return User.db("SELECT * FROM users");
  }
  constructor(name, email, pass, user_type_name = null) {
    super();
    this.name = name;
    this.email = email;
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
              "INSERT INTO users (name, email, pass, user_type_id) VALUES (?, ?, ?, ?)",
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

  sign_in() {
    return new Promise((resolve, reject) => {
      //Check if user exists in database first
      User.db("SELECT id FROM users WHERE email = ?", [this.email])
        .then((result) => {
          if (result.length > 0) {
            User.db(
              "SELECT name, email FROM users where email = ? AND pass = ?",
              [this.email, this.pass]
            )
              .then((find) => {
                if (find.length > 0) {
                  resolve({
                    httpStatus: 200,
                    message: "Sign-in success",
                    data: [{ name: find[0].name, email: find[0].email }],
                  });
                } else {
                  reject({
                    httpStatus: 401,
                    message: "Incorrect credentials",
                    data: [],
                  });
                }
              })
              .catch((err) => reject(err));
          } else {
            reject({
              httpStatus: 404,
              message: "User not found",
              data: [],
            });
          }
        })
        .catch((err) => reject(err));
    });
  }
}

module.exports = User;
