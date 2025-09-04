const courses = [
  {
    category: "wdd",
    name: "WDD130",
    url: "https://fehlipe19.github.io/wdd130/",
  },
  {
    category: "wdd",
    name: "WDD131",
    url: "https://fehlipe19.github.io/wdd131/",
  },
  {
    category: "wdd",
    name: "WDD231",
    url: "https://fehlipe19.github.io/wdd231/",
  },
  {
    category: "cse",
    name: "CSE111",
    url: "https://github.com/Fehlipe19/cse111",
  },
];
createList(courses);

function createList(filteredCourses) {
  filteredCourses.forEach((course) => {
    const classCard = document.createElement("a");
    classCard.classList.add("class-link");

    classCard.textContent = `${course.name}`;
    classCard.href = `${course.url}`;
    classCard.target = `_blank`;

    document.querySelector("#class-list").appendChild(classCard);
  });
}

const allButton = document.querySelector("#all-classes");
const cseButton = document.querySelector("#cse-classes");
const wddButton = document.querySelector("#wdd-classes");
const container = document.querySelector("#class-list");

allButton.addEventListener("click", () => {
  container.innerHTML = "";
  createList(courses);
});

cseButton.addEventListener("click", () => {
  container.innerHTML = "";
  createList(courses.filter((course) => course.category === "cse"));
});

wddButton.addEventListener("click", () => {
  container.innerHTML = "";
  createList(courses.filter((course) => course.category === "wdd"));
});
