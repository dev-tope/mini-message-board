#! /usr/bin/env node

import pg from "pg";
import dotenv from "dotenv";

dotenv.config()
const { Client } = pg;

// const time = new Date()

// const host = process.env.DATABASE_HOST;
// const user = process.env.DATABASE_USER;
// const password = process.env.DATABASE_PASSWORD;
// const port = process.env.DATABASE_PORT;
// const db_name = process.env.DATABASE_NAME;
// const ssl = process.env.DATABASE_SSL;

// console.log(`HEREEEE: postgresql://${user}:${password}@${host}:${port}/${db_name}`)

const SQL = `
CREATE TABLE IF NOT EXISTS message_details (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  message VARCHAR ( 255 ),
  time TIMESTAMP
);
`;

async function main (){
  console.log('seeding...')
  try {
    // if(port) {
    //   const client = new Client({
    //     connectionString: `postgresql://${user}:${password}@${host}:${port}/${db_name}`
    //   });

    //   await client.connect();
    //   await client.query(SQL);process.env.DATABASE_PASSWORD;
    //   const port = process.env.DATABASE_PORT
    //   await client.end();
    //   console.log("done")
    // };

    const client = new Client({
      // connectionString: `postgresql://${user}:${password}@${host}/${db_name}?sslmode=require`
      connectionString: "postgres://topebush:H5ZFKtAp0SVO@ep-steep-snow-a2zla64z.eu-central-1.pg.koyeb.app/koyebdb?sslmode=require"
    });

    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done")
  } catch (err) {
    console.log("DB connection error: ", err)
  }
}

main()
