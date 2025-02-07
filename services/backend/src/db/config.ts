import "dotenv/config";
import { DataSource } from "typeorm";
import path from "path";

const PostgresDataSource  = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USERNAME,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  ssl: false,
  synchronize: false,
  logging: true,
  logger: undefined,
  entities: [path.join(__dirname, "/entities/*.[jt]s")],
  migrations: [path.join(__dirname,"/migrations/*.[jt]s")],
});

export default PostgresDataSource;