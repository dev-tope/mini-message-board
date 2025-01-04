import { getAllMessages, insertMessage } from "../db/queries.js";

async function getMessages(req, res) {
  const messages = await getAllMessages()
  res.render("index", { title:"Mini Message Board", messages: messages })
}

async function newMessageGet(req, res) {
  res.render("form", {title: "Create New Message"})
}

async function newMessagePost(req, res) {
  const { messageUser, messageText } = req.body;
  await insertMessage(messageUser, messageText)
  res.redirect('/')
}


export { getMessages, newMessageGet, newMessagePost }