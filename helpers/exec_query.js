//Este helper lo que hace es obtener una conexión, y ejecutar la query de forma controlada.
const pool = require("../config/mysql.js");
function exec_query(query) {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        resolve("Error in pool connection:" + err);
      }
      //el parametro query necesita llegar sanitizado o sanitizarse antes de lanzarse
      connection.query(query, (err, results, fields) => {
        if (err) {
          connection.release();
          reject("Error in query execution:" + err);
        }
        connection.release();
        resolve(results);
      });
    });
  });
}

module.exports = exec_query;
