// seleciona o link do botão "Comprar"
const botaoComprar = document.querySelector('#buy');

// adiciona um evento de clique ao botão "Comprar"
botaoComprar.addEventListener('click', (event) => {
  // evita que o link padrão seja seguido
  event.preventDefault();
  
  // obtém o nome e o preço da roupa da tag div
  const info = document.querySelector('#info');
  const nomeRoupa = info.querySelector('h2').textContent;
  const precoRoupa = info.querySelector('p').textContent;

  // constrói a mensagem pré-preenchida
  const mensagem = `Olá, gostaria de comprar a ${nomeRoupa} por ${precoRoupa}.`;

  // abre o WhatsApp com a mensagem pré-preenchida
  window.location.href = `whatsapp://send?text=${encodeURIComponent(mensagem)}`;
});
