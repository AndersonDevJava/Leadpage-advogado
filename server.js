import express from 'express'
import { router } from './src/api/routes/router.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/users', router)

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});