const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const cardapioItems = document.querySelectorAll('.cardapio__item');

searchInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
      searchButton.click();
  }
});

searchButton.addEventListener('click', () => {
const searchTerm = searchInput.value.toLowerCase().trim();

  cardapioItems.forEach(item => {
    const tituloPrincipal = item.querySelector('.titulo__principal');
    const nomeLanche = item.querySelector('.principal__nomeLanche');
    if (
      (tituloPrincipal && tituloPrincipal.textContent.toLowerCase().includes(searchTerm)) ||
      (nomeLanche && nomeLanche.textContent.toLowerCase().includes(searchTerm))
  ) {
      item.style.display = 'block';
      item.scrollIntoView({ behavior: 'smooth' });
      return; // Encontrou o resultado, sai do loop
  } else {
      item.style.display = 'none';
  }
});
});