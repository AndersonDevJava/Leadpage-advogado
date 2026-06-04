console.log("servidor rodando")

const form = document.getElementById("form-leads")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    // Captura dos valores corretos do HTML
    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const telefone = document.getElementById("telefone").value
    const areaSelect = document.getElementById("area").value
    const mensagemTexto = document.getElementById("mensagem").value

    // Map para o Banco de Dados
    const areaMap = {
        empresarial: "DIREITO_EMPRESARIAL",
        familia: "DIREITO_FAMILIA",
        imobiliario: "DIREITO_IMOBILIARIO",
        civil: "DIREITO_CIVIL",
        consumidor: "DIREITO_CONSUMIDOR",
        trabalhista: "DIREITO_TRABALHISTA",
        outro: "OUTRO"
    }

    const data = {
        nome: nome,
        email: email,
        telefone: telefone,
        area: areaMap[areaSelect],
        mensagem: mensagemTexto
    }

    try {
        // 1. Envia para o banco de dados
        const response = await fetch("https://leadpage-advogado.onrender.com/users", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if(response.ok){
            alert("Mensagem enviada com sucesso! Abrindo o WhatsApp...")
            
            // 2. Dispara o WhatsApp com os dados validados
            const textoWhats = `Olá, me chamo ${nome}\n\nTelefone: ${telefone}\nE-mail: ${email}\n\nÁrea de interesse:\n${areaMap[areaSelect]}\n\nDescrição:\n${mensagemTexto}`
            const numero = '5583986306588'

            window.open(
                `https://wa.me/${numero}?text=${encodeURIComponent(textoWhats)}`,
                '_blank'
            )

            form.reset()
        } else {
            alert(result.message)
        }

    } catch (error) {
        alert("Erro ao conectar com o servidor")
        console.error(error)
    }
})