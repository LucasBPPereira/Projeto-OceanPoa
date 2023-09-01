const carousel = document.querySelector('.card-tenis-mobile');  // constante carousel para div = .card-tenis
const prevBtn = document.getElementById('prevBtn');      // constante botão anterior para o btn = .btn-slider
const nextBtn = document.getElementById('nextBtn');      // constante botão próximo para o btn =  .btn-slider
const itemWidth = document.querySelector('.card-tenis-item-mobile').clientWidth;
// constante itemWidth(.card-tenis-item).clientWidth
// a constante por conta da propriedade "clientWidth" armazenara o valor width(250px) de cada elemento com a classe .card-tenis-item 

let currentIndex = 0;
let touchStartX = 0;

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < carousel.children.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

carousel.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX;
});

carousel.addEventListener('touchend', (event) => {
  const touchEndX = event.changedTouches[0].clientX;
  const touchDiff = touchEndX - touchStartX;

  if (touchDiff > 0 && currentIndex > 0) {
    currentIndex--;
  } else if (touchDiff < 0 && currentIndex < carousel.children.length - 1) {
    currentIndex++;
  }

  updateCarousel();
});

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}
