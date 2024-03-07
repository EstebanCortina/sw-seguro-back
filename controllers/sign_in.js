const pool = require("../config/mysql.js");
module.exports = (req, res) => {
  pool.con;
  res.status(200).send("SW");
};
