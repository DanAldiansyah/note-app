import express from 'express'
import 'dotenv/config'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Backend Running...")
})


app.listen(process.env.PORT)