import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "Serpiente$666",
  port: 3306,
  database: "dispositivos",
});

export { pool };
