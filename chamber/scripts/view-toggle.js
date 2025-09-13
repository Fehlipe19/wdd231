const grid = document.getElementById("grid-view");
const list = document.getElementById("list-view");
const cardContainer = document.getElementById("directory");
const cardList = document.querySelectorAll(".card-info");

grid.addEventListener("click", () => {
  grid.classList.add("active-view");
  list.classList.remove("active-view");
  cardContainer.classList.remove("list-view");
  cardContainer.classList.add("grid-view");
});

list.addEventListener("click", () => {
  grid.classList.remove("active-view");
  list.classList.add("active-view");
  cardContainer.classList.remove("grid-view");
  cardContainer.classList.add("list-view");
});
