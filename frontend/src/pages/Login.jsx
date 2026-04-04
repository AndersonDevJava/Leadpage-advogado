import { useState } from 'react'

function Login() {
  const [loading, setloadingn] = useState(false)

  function handleLogin(e) {
    e.preventDefault()
    setloadingn(true)
  }

  return (
    <div className="bg-gradient-to-t from-yellow-300/30 h-screen flex justify-center items-center">
      <form
        onSubmit={handleLogin}
        className="border border-white/20 w-96 rounded-md p-7 bg-white/30 shadow-sm shadow-indigo-50 bg-gradient-to-t from-black/20"
      >
        <div className="border border-white/30 w-20 h-2 mx-auto rounded-md bg-black/20">
          {' '}
        </div>
        <h1 className="text-white font-semibold text-center mt-3 text-2xl">
          LOGIN
        </h1>

        <div className="flex flex-col gap-5 items-center mt-10">
          <input
            type="email"
            placeholder="username"
            required
            className="w-72 h-10 px-3 bg-white/20 border border-white/20 rounded-md placeholder-white text-white"
          />

          <input
            type="password"
            placeholder="***********"
            required
            className="w-72 h-10 px-3 bg-white/20 border border-white/20 rounded-md placeholder-white text-white"
          />

          <button
            type="submit"
            disabled={loading}
            className={`bg-black text-white w-72 h-10  border-white/20 rounded-md active:text-black
              ${
                loading
                  ? 'bg-gray-500 cursor-not-allowed'
                  : 'bg-black hover:bg-green-600 active:scale-95'
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
