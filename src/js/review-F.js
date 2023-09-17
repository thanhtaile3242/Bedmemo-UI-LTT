const card = document.querySelector(".card__inner");

card.addEventListener("click", function () {
    card.classList.toggle("is-flipped");
});

const btn_check = document.querySelector(".user-btn");

btn_check.addEventListener("click", function () {
    btn_check.classList.toggle("green");
});
