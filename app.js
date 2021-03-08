const btn = document.querySelector('.menu');
const body = document.querySelector(".body");
const links = document.querySelector("#navlinks");



btn.addEventListener('click', () => {
  body.classList.toggle("active");
  links.classList.toggle("active");
  console.log('working');
});

console.log(links)

