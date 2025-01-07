import pg from "pg";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config()


const { Pool } = pg;

export const pool = new Pool ({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD, //hardcoded because hosting refuses to connect with env variable
  // port: process.env.DB_PORT,
  database: process.env.DATABASE_NAME,
  ssl: process.env.DATABASE_SSL
});

console.log("Database User", process.env.DATABASE_USER);
console.log("Database Password", process.env.DATABASE_PASSWORD);

(async () => {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('Connected to DB:', result.rows[0]);
  } catch (err){
    console.error('Database connection error', err)
  } 
})()