import mysql from "mysql2/promise";

export class ConnectUtils {
  static async DBConnect() {
    const connection = await mysql.createConnection({
      host: process.env.DB_URL,
      database: process.env.MYSQL_DB,
      port: parseInt(process.env.MYSQL_PORT),
      user: process.env.MYSQL_NAME,
      password: process.env.MYSQL_PWD,
    });
    return connection;
  }
}
