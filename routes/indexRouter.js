import { Router } from "express";
import { getMessages, newMessageGet, newMessagePost } from "../controllers/indexController.js";


const indexRouter = Router()


const messages = [
  
];

console.log(typeof(messages))

indexRouter.get('/', getMessages)

indexRouter.get('/new', newMessageGet)

indexRouter.post('/new', newMessagePost)


export { indexRouter }