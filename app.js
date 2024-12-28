import express from "express";
import path from "node:path";
import url from "node:url";
import { indexRouter } from "./routes/indexRouter.js";
import 'dotenv/config'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter)

app.get('/new', (req, res) => {
  res.send('new')
})

//VIEWS
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.listen(PORT, () => {
  console.log("App listening at port", PORT)
})