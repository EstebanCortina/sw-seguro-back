class User {
  constructor(name, pass, user_type_id) {
    (this.name = name), (this.pass = pass), (this.user_type_id = user_type_id);
    this.table_name = "users";
  }
  create(db_handler) {
    return db_handler(
      "INSERT INTO users (name, pass, user_type_id) VALUES (?, ?, ?)",
      Object.values(this)
    )
      .then((response) => response)
      .catch((res) => console.log(res));
  }
}

module.exports = User;
