import express from 'express'
import { router } from './src/api/routes/router.js'
import cors from 'cors'
import { prisma } from './src/api/lib/conectionDataBase.js'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/users', router)

app.get('/test-db', async (req, res) => {
  try {
    const contatos = await prisma.contato.findMany()
    res.json({
      status: 'OK',
      total: contatos.length,
      dados: contatos
    })
  } catch (error) {
    res.status(500).json({
      erro: error.message,
      code: error.code
    })
  }
})

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});