import {
  regexName,
  tamanhoNome,
  regexPhone,
  regexEmail,
} from '../utils/utils.js'

export function validarCreateUser(req, res, next) {
  const { nome, email, telefone, area, mensagem } = req.body

  if (!nome || !email || !telefone || !area || !mensagem) {
    return res.status(400).json({ message: 'Campos obrigatórios' })
  }

  if (!regexName(nome)) {
    return res.status(400).json({ message: 'Digite seu nome completo!' })
  }

  if (!tamanhoNome(nome)) {
    const tamanhoName = nome.length
    if (tamanhoName < 2) {
      return res.status(400).json({
        message:
          tamanhoName < 2
            ? `Nome muito curto (${tamanho}). Mínimo 3 caracteres.`
            : `Nome muito longo (${tamanho}). Máximo 100 caracteres.`,
      })
    }
  }

  if (!regexPhone(telefone)) {
    return res.status(400).json({ message: 'Telefone inválido! Formato: (DDD) 90000-0000' })
  }

  if (!regexEmail(email)) {
    return res.status(400).json({ message: 'Email inválido Formato: seuemail@gmail.com' })
  }

  next()
}
