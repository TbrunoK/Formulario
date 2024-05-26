document.addEventListener("DOMContentLoaded", () => {
  const eventDetailsContainer = document.getElementById("event-details")

  // Função para obter parâmetros da URL
  function getQueryParams() {
    return new URLSearchParams(window.location.search)
  }

  const params = getQueryParams()

  // Extrai os parâmetros da URL
  const title = params.get("title")
  const link = params.get("link")
  const whatsapp = params.get("whatsapp")
  const info = params.get("info")
  const category = params.get("category")
  const email = params.get("email")
  const password = params.get("password")
  const date = params.get("date")
  const begin = params.get("begin")
  const end = params.get("end")

  // Cria o HTML com os detalhes do evento
  const eventDetailsHTML = `
        <h2>${title}</h2>
        <p><strong>Link do evento:</strong> <a href="${link}" target="_blank">${link}</a></p>
        <p><strong>Whatsapp para contato:</strong> ${whatsapp}</p>
        <p><strong>Descrição:</strong> ${info}</p>
        <p><strong>Categoria:</strong> ${category}</p>
        <p><strong>E-mail do administrador:</strong> ${email}</p>
        <p><strong>Senha de acesso:</strong> ${password}</p>
        <p><strong>Data:</strong> ${date}</p>
        <p><strong>Início:</strong> ${begin}</p>
        <p><strong>Fim:</strong> ${end}</p>
    `

  // Insere o HTML no container
  eventDetailsContainer.innerHTML = eventDetailsHTML
})
