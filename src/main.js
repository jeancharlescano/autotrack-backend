import express from "express"


import router from "./routes/routes.js"

import cors from 'cors'
const app = express()
app.use(cors())
const port = 3000


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', router);

app.listen(port, () => {
  console.log(`Example app http://localhost:${port}`)
})