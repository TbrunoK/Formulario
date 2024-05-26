document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("event-form")

  form.addEventListener("submit", (event) => {
    event.preventDefault() // Previne o comportamento padrão de envio do formulário

    // Captura os valores dos campos do formulário
    const title = document.getElementById("event-title").value
    const link = document.getElementById("event-link").value
    const whatsapp = document.getElementById("event-whatsapp").value
    const info = document.getElementById("event-info").value
    const category = document.getElementById("event-category").value
    const email = document.getElementById("event-email").value
    const password = document.getElementById("event-password").value
    const date = document.getElementById("event-date").value
    const begin = document.getElementById("event-begin").value
    const end = document.getElementById("event-end").value

    // Cria uma query string com os dados do evento
    const queryString = new URLSearchParams({
      title,
      link,
      whatsapp,
      info,
      category,
      email,
      password,
      date,
      begin,
      end,
    }).toString()

    // Redireciona para a página de detalhes do evento
    window.location.href = `event-details.html?${queryString}`
  })
})
