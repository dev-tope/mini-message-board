import { Router } from "express";

const indexRouter = Router()


const messages = [
  
];

console.log(typeof(messages))

indexRouter.get('/', (req, res) => {
  res.render('index', {title: 'Mini Message Board', messages: messages})
})

indexRouter.get('/new', (req, res) => {
  res.render('form')
})

indexRouter.post('/new', (req, res) => {
  messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date() })
  res.redirect('/')
})

indexRouter.get('/message/:id', (req, res) => {
  res.render('message', {id: req.params.id, messages: messages})
})

export { indexRouter }