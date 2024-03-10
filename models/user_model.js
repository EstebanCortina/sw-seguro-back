const db_handler = require("./db_hanlder.js");
class User extends db_handler {
  static index(user_type_name) {
    let clause = user_type_name
      ? `WHERE user_type_name = '${user_type_name}'`
      : "";
    return User.db(
      `SELECT id, name, email, is_active, user_type_name FROM users_view ${clause}`
    )
      .then((results) => {
        return {
          httpStatus: 200,
          message: "Users index success",
          data: results,
        };
      })
      .catch((err) => err);
  }

  static find_by_id(user_id) {
    return User.db(
      "SELECT id, name, email, is_active, user_type_name FROM users_view WHERE id = ?",
      [parseInt(user_id)]
    )
      .then((found) => {
        return {
          httpStatus: 200,
          message: "User index success",
          data: found,
        };
      })
      .catch((err) => err);
  }

  /**
   * Set user's is_active property.
   *
   * @param {string} user_id - User id to patch.
   * @param {number} b - New is_active status for patch.
   * @returns {object} http formated response.
   */
  static set_user_is_active(user_id, state) {
    return new Promise((resolve, reject) => {
      User.db("UPDATE users SET is_active = ? WHERE id = ?", [
        state,
        parseInt(user_id),
      ])
        .then((query_result) => {
          if (query_result.affectedRows > 0) {
            resolve({
              httpStatus: 200,
              message: "Patch user success",
              data: {
                user_id: user_id,
                is_active: state,
              },
            });
          } else {
            reject({
              httpStatus: 404,
              message: "User not found",
              data: [user_id],
            });
          }
        })
        .catch((err) => reject(err));
    });
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
              data: null,
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
      User.db("SELECT id FROM users_view WHERE email = ?", [this.email])
        .then((result) => {
          if (result.length > 0) {
            User.db(
              "SELECT id, name, email, user_type_name FROM users_view where email = ? AND pass = ?",
              [this.email, this.pass]
            )
              .then((find) => {
                if (find.length > 0) {
                  resolve({
                    httpStatus: 200,
                    message: "Sign-in success",
                    data: {
                      id: find[0].id,
                      name: find[0].name,
                      email: find[0].email,
                      user_type_name: find[0].user_type_name,
                    },
                  });
                } else {
                  reject({
                    httpStatus: 401,
                    message: "Incorrect credentials",
                    data: null,
                  });
                }
              })
              .catch((err) => reject(err));
          } else {
            reject({
              httpStatus: 404,
              message: "User not found",
              data: null,
            });
          }
        })
        .catch((err) => reject(err));
    });
  }
}

module.exports = User;
