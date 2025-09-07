const menuButton = document.querySelector("#ham-menu");
const navList = document.querySelector("ul");

menuButton.addEventListener("click", () => {
  navList.classList.toggle("open");
  menuButton.classList.toggle("active");
});

const tabs = document.querySelectorAll(".mobile-nav > li > a");
// console.log(tabs);

// function currentTab (tab) => {
//   tab.addEventListener("click", () => {

//   });
// }

function toggleCurrent(tabs) {
  tabs.forEach((tab) => {
    if (tab.classList.contains("current-tab")) {
      tab.classList.remove("current-tab");
    }
  });
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    toggleCurrent(tabs);
    tab.classList.add("current-tab");
  });
});
