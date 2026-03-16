import express from 'express'
import { router } from './src/api/routes/router.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/users', router)

app.listen(3333, () => {
    console.log("Servidor rodando na porta 3333")
})