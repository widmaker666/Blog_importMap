// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails



const btn = document.getElementById("btn");
const articles = document.querySelectorAll("#articles-content");
const nb = document.querySelector(".nb");

let count = articles.length;

const nbArticle = `${count} articles`;

btn.addEventListener("click", () => {
  nb.textContent = nbArticle;
});
