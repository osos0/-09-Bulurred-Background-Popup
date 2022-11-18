const btn1El = document.querySelector(".btn");
const contanerEl = document.querySelector(".contaner");
const btn2El = document.querySelector(".popup-btn");
const popContEl = document.querySelector(".popup-contaner");
const closeEl = document.querySelector(".fa-solid");

btn1El.addEventListener("click", () => {
  contanerEl.classList.add("active");
  popContEl.classList.add("active");
});

closeEl.addEventListener("click", () => {
  popContEl.classList.remove("active");
  contanerEl.classList.remove("active");
});
