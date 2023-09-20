import mysql from "mysql2";

export class ConnectUtils {
  static DBConnect() {
    return mysql.createConnection({
      host: process.env.DB_URL,
      database: process.env.MYSQL_DB,
      port: parseInt(process.env.MYSQL_PORT),
      user: process.env.MYSQL_NAME,
      password: process.env.MYSQL_PWD,
    });
  }
}
