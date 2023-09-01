let menu = document.querySelector('#menu')
let navPag = document.querySelector('.nav-pag')
let navSocMedia = document.querySelector('.nav-social-media')
let content = document.querySelectorAll('section');

menu.addEventListener('click', () => {
    // função para ativar o menu mobile
    menu.classList.toggle('ativo')
    navPag.classList.toggle('ativo')
    navSocMedia.classList.toggle('ativo')

    if (menu.classList.contains('ativo')) {
        disableScroll();
      } else {
        enableScroll();
      }
})

// Função para desativar a rolagem
function disableScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100vh';
  }
  
  // Função para reativar a rolagem
function enableScroll() {
    document.body.style.overflow = 'auto';
    document.body.style.height = 'auto';
  }

const containerHeader = document.querySelector('.container-header');
let isScrolled = false;

window.addEventListener('scroll', () => {
  if (window.scrollY > 0 && !isScrolled) {
    // condição que verifica se o usuário rolou a página para baixo e se saiu do ponto principal
    containerHeader.classList.add('scrolled');
    isScrolled = true;
  } else if (window.scrollY === 0 && isScrolled) {
    // condição que verifica se a página voltou para o ponto principal
    containerHeader.classList.remove('scrolled');
    isScrolled = false;
  }
});
