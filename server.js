import express from 'express'
import { router } from './src/api/routes/router.js'

const app = express()

app.use(express.json())

app.use('/users', router)

app.listen(3333, () => {
    console.log("Servidor rodando na porta 3333")
})