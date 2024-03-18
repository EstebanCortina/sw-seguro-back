//Este helper lo que hace es obtener una conexión, y ejecutar la query de forma controlada.
const pool = require("../config/mysql.js");
function exec_query(query, params) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        return reject({
          httpStatus: 500,
          message: "Error in pool connection",
          data: err,
        });
      }
      connection.query(query, params, (err, results, fields) => {
        if (err) {
          connection.release();
          return reject({
            httpStatus: 500,
            message: "Error in query execution",
            data: err,
          });
        }
        connection.release();
        resolve(results);
      });
    });
  });
}

module.exports = exec_query;
