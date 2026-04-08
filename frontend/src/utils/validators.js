export function validatorLogin(email, senha) {
  const regexEmail = /^[^\s@]+@(gmail\.com|hotmail\.com)$/

  const [dataEmail] = email.split('@')

  if(dataEmail.length < 3){
    return 'Email muito curto'
  }

  if (!email) {
    return 'Campo e-mail obrigatório!'
  }

  if (!regexEmail.test(email)) {
    return 'E-mail inválido'
  }

  if (!senha || senha.length < 6) {
    return 'A senha deve ter 6 digitos'
  }

  return true
}

export default validatorLogin
