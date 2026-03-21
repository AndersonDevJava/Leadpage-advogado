console.log("servidor rodando")

const form = document.getElementById("form-leads")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    // Map para converter o valor do select no valor do enum
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
        nome: document.getElementById("name").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        area: areaMap[document.getElementById("area").value],
        mensagem: document.getElementById("mensagem").value
    }

    try {
        const response = await fetch("http://localhost:3333/users", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        console.log(result)

        if(response.ok){
            alert("Mensagem enviada com sucesso!")
            form.reset()
        } else {
            alert(result.menssage)
        }

    } catch (error) {
        alert("Erro ao conectar com o servidor")
        console.error(error)
    }
})