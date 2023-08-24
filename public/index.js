
function toggleMenu() {
  const mobileMenuLayer = document.getElementById('mobileMenuLayer');
  mobileMenuLayer.classList.toggle('hidden');
  
  const menuIcon = document.getElementById('menuIcon');
  const closeIcon = document.getElementById('closeIcon');
  
  // Troca os ícones
  if (mobileMenuLayer.classList.contains('hidden')) {
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
  } else {
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
  }
}

const scrollableDiv = document.getElementById("scrollableDiv");
const scrollContent = document.getElementById("scrollContent");
let scrollPosition = 0;
const scrollRange = 6; // Defina o alcance de rolagem permitido

scrollableDiv.addEventListener("wheel", (event) => {
  const scrollDelta = event.deltaY;
  
  // Calcular a nova posição de rolagem limitada dentro do intervalo
  const newScrollPosition = Math.min(
    Math.max(0, scrollPosition + scrollDelta),
    scrollRange
  );

  // Atualizar a posição de rolagem real
  scrollPosition = newScrollPosition;
  
  // Aplicar transformação de rolagem
  scrollContent.style.transform = `translateY(-${scrollPosition}px)`;
  
  event.preventDefault();
});
