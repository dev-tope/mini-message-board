import pg from "pg";
import dotenv from "dotenv";

dotenv.config()


const { Pool } = pg;

export const pool = new Pool ({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD, //hardcoded because hosting refuses to connect with env variable
  port: process.env.DB_PORT,
  database: process.env.DATABASE_NAME,
  ssl: process.env.DATABASE_SSL
}) 