import { useState } from 'react'
import { validatorLogin } from '../utils/validators.js'

function Login() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [type, setType] = useState('')

  function mensagemError(msg){
      setMensagem(msg)

      setTimeout(() => {
        setMensagem('')
      }, 3000)
    }

  function handleLogin(e) {
    e.preventDefault()
    setLoading(true)

    const result = validatorLogin(email, senha)

    if(result !== true){
      mensagemError(result)
      setType('error')
      setLoading(false)
      return
    }

    mensagemError("Dados validado com Sucesso!")
    setType('sucesso')
  }

  return (
    <div className="bg-gradient-to-t from-yellow-300/30 h-screen flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="border border-white/20 w-96 rounded-md p-7 bg-white/30 shadow-sm shadow-indigo-50 bg-gradient-to-t from-black/20"
      >
        <h1 className="text-white font-semibold text-center mt-3 text-2xl">
          LOGIN
        </h1>

        <div className="flex flex-col gap-5 items-center mt-10">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="username"
            required
            className="w-72 h-10 px-3 bg-white/20 border border-white/20 rounded-md placeholder-white text-white cursor-pointer"
          />

          {mensagem && (
            <p 
            className={`text-md text-center w-60 rounded-md ${
              type === 'error' ? 'text-red-500 font-semibold bg-red-300' : 'text-white font-semibold bg-green-600'
            }`}
            >
            {mensagem}
            </p>
          )}

          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="***********"
            required
            className="w-72 h-10 px-3 bg-white/20 border border-white/20 rounded-md placeholder-white text-white cursor-pointer"
          />

          <button
            type="submit"
            disabled={loading}
            className={`bg-black text-white w-72 h-10 rounded-md
              ${
                loading
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'hover:bg-green-600 active:scale-95'
              }`}
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white mx-auto border-t-transparent rounded-full animate-spin"></div>
            ) : (
              'Entrar'
            )}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login