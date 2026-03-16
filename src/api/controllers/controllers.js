import { createContatoServices } from '../services/services.js'

export async function criarContatoContoller(req, res) {
  try {
    const { nome, email, telefone, area, mensagem } = req.body

    const contato = await createContatoServices({
      nome,
      email,
      telefone,
      area,
      mensagem,
    })

    return res.status(200).json({ menssage: 'Usuário criado com Sucesso!' })
  } catch (error) {
    console.error(error)
    if (error.code === 'P2002') {
      return res
        .status(400)
        .json({ menssage: 'Email ou telefone já estão cadastrados' })
    }
    return res.status(500).json({ erro: 'Erro ao salvar contato' })
  }
}
