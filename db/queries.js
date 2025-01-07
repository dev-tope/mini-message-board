import { pool } from "./pool.js";

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM message_details");
  return rows;
}

async function insertMessage(username, message) {
  const time = new Date();
  await pool.query("INSERT INTO message_details (username, message, time) VALUES ($1, $2, $3)", [username, message, time]);
}


export { getAllMessages, insertMessage }