const btn = document.querySelector('.menu');
const header = document.querySelector(".header");


btn.addEventListener('click', () => {
  header.classList.toggle("height");
  console.log('working');
});

AOS.init();