const sqlstring = require("sqlstring");
function escape_body(req, res, next) {
  Object.keys(req.body).forEach((field) => {
    req.body[field] = sqlstring.escape(req.body[field]);
  });
  next();
}

module.exports = escape_body;

