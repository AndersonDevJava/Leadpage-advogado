const blocos = [ 
    { icon: '<i class="fas fa-briefcase"></i>',
     titulo: `Direito Empresarial`,
     desc: `Assessoria completa para empresas, contratos comerciais e planejamento tributário.`
    },
  {  icon: '<i class="fas fa-users"></i>',
     titulo: `Direito de Família`,
     desc: `Divórcios, guarda de filhos, pensões e inventários com sensibilidade e profissionalismo.`
  },
  {  icon: '<i class="fas fa-building"></i>',
     titulo: `Direito Imobiliário`,
     desc: `Compra, venda, locação e regularização de imóveis com segurança jurídica.`
  },
  {  icon: '<i class="fas fa-file"></i>',
     titulo: `Direito Civil`,
     desc: `Indenizações, contratos, cobranças e responsabilidade civil.`
  },
  {  icon: '<i class="fas fa-shield-alt"></i>',
     titulo: `Direito do Consumidor`,
     desc: `Defesa dos seus direitos contra práticas abusivas e produtos defeituosos.`
  },
  {  icon: '<i class="fas fa-gavel"></i>',
     titulo: `Direito Trabalhista`,
     desc: `Reclamações trabalhistas, acordos e defesa de direitos do trabalhador.`
  },
]


const menuBtn = document.getElementById('menu-btn')
const mobileMenu = document.getElementById('mobile-menu')
const menuIcon = menuBtn.querySelector('i')

menuBtn.addEventListener('click', () => {
  // Alterna visibilidade do menu
  mobileMenu.classList.toggle('hidden')

  // Alterna ícone hambúrguer/X
  if (mobileMenu.classList.contains('hidden')) {
    menuIcon.classList.remove('fa-times')
    menuIcon.classList.add('fa-bars')
  } else {
    menuIcon.classList.remove('fa-bars')
    menuIcon.classList.add('fa-times')
  }
})
  // Exibicao dinamica

  const container = document.getElementById("blocos")

  blocos.forEach((item) => {
    const div = document.createElement("div")

    div.className = 
    "p-4 lg:w-md lg:h-60 w-80 h-60 rounded-lg bg-gray-400/5 lg:grid lg:grid-cols-1 hover:border-amber-500/50 hover:border lg:hover:shadow-[0_0_100px_20px_rgba(217,165,32,0.3)] lg:hover:trasition hover:duration-700 grid grid-cols-1 md:w-2xl"

    div.innerHTML = `
    <div class="bg-amber-200/20 lg:flex ml-3 w-fit h-fit lg:p-3 p-5 rounded-lg hover:shadow-2xs w-">
      <i class="text-2xl text-[#d9a520]">${item.icon}</i>
    </div>
    <h1 class="text-white ml-3 lg:text-2xl text-md font-serif font-bold md:text-2xl">${item.titulo}</h1>
    <p class="text-gray-400 ml-3">${item.desc}</p>
    `

    container.appendChild(div)
  })