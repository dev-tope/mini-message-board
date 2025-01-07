import express from "express";
import path from "node:path";
import url from "node:url";
import { indexRouter } from "./routes/indexRouter.js";
import 'dotenv/config'
// console.trace("Tracing output source")

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter)


//VIEWS
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.listen(PORT, () => {
  console.log("App listening at port", PORT)
})
