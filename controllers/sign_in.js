const exec_query = require("../helpers/exec_query.js");
module.exports = (req, res) => {
  let results = exec_query("SELECT * FROM users");
  res.status(200).send(results);
};
