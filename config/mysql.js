const { createPool } = require("mysql2");
const pool = createPool({
  host: process.env.MYSQL_HOST || "127.0.0.1",
  port: process.env.MYSQL_PORT || 3309,
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "1234",
  database: process.env.MYSQL_DATABASE || "sw_dev",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

process.on("SIGINT", () => {
  pool.end((err) => {
    if (err) {
      console.error("Error in pool close connections:", err);
      process.exit(1);
    }
    process.exit(0);
  });
});

pool.on("error", (err) => {
  console.error("Error de conexión:", err);
});

module.exports = pool;
