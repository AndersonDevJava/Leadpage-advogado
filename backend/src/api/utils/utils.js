
export function regexName(name) {
  const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:\s+[A-Za-zÀ-ÖØ-öø-ÿ]+)+$/
  return nameRegex.test(name.trim())
}

export function tamanhoNome(name){
  if(name.length < 2 || name.length > 100){
    return false
  }
  return true
}

export function regexPhone(phone) {
  const phoneRegex = /^\(\d{2}\)\s9\d{4}-\d{4}$/
  return phoneRegex.test(phone)
}

export function regexEmail(email) {
  const emailRegex = /^[a-zA-Z._%+-]+@gmail\.com$/
  return emailRegex.test(email.trim())
}
