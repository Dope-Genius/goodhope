let buttton = document.querySelectorAll('.menu');
const body = document.querySelector(".body");
const links = document.querySelector("#navlinks");



// btn.addEventListener('click', () => {
//   body.classList.toggle("active");
//   links.classList.toggle("active");
//   console.log('working');
// });

// for (var i = 0; i < btn.length; i++) {
//   btn[i].addEventListener('click', myFunction, false);
// };


buttton.forEach(btn => {
  btn.addEventListener("click", myFunction)
});


function myFunction() {
  body.classList.toggle("active");
  links.classList.toggle("active");
  console.log('working');
}