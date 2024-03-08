const sqlstring = require("sqlstring");
function escape_body(req, res, next) {
  //TODO tengo que ver en base de datos para que el default de uuid de user_types lo ponga con comillas de una vez y asi para cuando escape los caracteres, añada esos dos y se vuelva un id varchar(38) y pueda caber en el campo user_type_id de la tabla users
  Object.keys(req.body).forEach((field) => {
    req.body[field] = sqlstring.escape(req.body[field]);
  });
  next();
}

module.exports = escape_body;

