const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

noBtn.addEventListener("click", () => {
  question.innerHTML = "Dont Be Disappointed, you doing your best!";
  gif.src =
    "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

yesBtn.addEventListener("mouseover", () => {
  const yesBtnRect = yesBtn.getBoundingClientRect();
  const maxX = window.innerWidth - yesBtnRect.width;
  const maxY = window.innerHeight - yesBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  yesBtn.style.left = randomX + "px";
  yesBtn.style.top = randomY + "px";
});