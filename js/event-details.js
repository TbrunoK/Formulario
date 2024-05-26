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
    <h2 class="event-title">${title}</h2>
    <div class="details-grid">
      <p><strong>Link do evento:</strong></p> <p><a class="infos" href="${link}" target="_blank">${link}</a></p>
      <p><strong>Whatsapp para contato:</strong></p> <p class="infos">${whatsapp}</p>
      <p><strong>Descrição:</strong></p> <p class="infos">${info}</p>
      <p><strong>Categoria:</strong></p> <p class="infos">${category}</p>
      <p><strong>E-mail do administrador:</strong></p> <p class="infos">${email}</p>
      <p><strong>Senha de acesso:</strong></p> <p class="infos">${password}</p>
      <p><strong>Data:</strong></p> <p class="infos">${date}</p>
      <p><strong>Início:</strong></p> <p class="infos">${begin}</p>
      <p><strong>Fim:</strong></p> <p class="infos">${end}</p>
    </div>
  `

  // Insere o HTML no container
  eventDetailsContainer.innerHTML = eventDetailsHTML
})
