const exec_query = require("../helpers/exec_query.js");
module.exports = (req, res) => {
  exec_query("SELECT * FROM users")
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};
