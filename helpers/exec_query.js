//Este helper lo que hace es obtener una conexión, y ejecutar la query de forma controlada.
const pool = require("../config/mysql.js");
function exec_query(query) {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Error in pool connection:", err);
      return;
    }
    //el parametro query necesita llegar sanitizado o sanitizarse antes de lanzarse
    connection.query(query, (err, results, fields) => {
      if (err) {
        console.error("Error in query execution:", err);
        connection.release();
        return;
      }
      console.log("Resultados de la consulta:", results);
      connection.release();
    });
  });
}

module.exports = exec_query;
