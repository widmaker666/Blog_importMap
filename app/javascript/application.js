// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "bootstrap";

const btn = document.getElementById("btn");
const title = document.querySelector(".nb")
console.log(btn);
const nbArticle = [];

fetch(API)
  .then((response) => response.json())
  .then((data) => console.log(data.id));

btn.addEventListener("click", () => {
title.innerHTML = nbArticle;

}
);
