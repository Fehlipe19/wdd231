const courses = [
  {
    category: "wdd",
    name: "WDD130",
    url: "https://fehlipe19.github.io/wdd130/",
    credits: 2,
    completed: true,
  },
  {
    category: "wdd",
    name: "WDD131",
    url: "https://fehlipe19.github.io/wdd131/",
    credits: 2,
    completed: true,
  },
  {
    category: "wdd",
    name: "WDD231",
    url: "https://fehlipe19.github.io/wdd231/",
    credits: 2,
    completed: false,
  },
  {
    category: "wdd",
    name: "WDD330",
    url: "#",
    credits: 3,
    completed: false,
  },
  {
    category: "cse",
    name: "CSE111",
    url: "https://github.com/Fehlipe19/cse111",
    credits: 2,
    completed: true,
  },
];
createList(courses);

function createList(filteredCourses) {
  filteredCourses.forEach((course) => {
    const classCard = document.createElement("a");
    classCard.classList.add("class-link");
    if (course.completed) {
      classCard.classList.add("completed");
    }

    classCard.textContent = `${course.name}`;
    classCard.href = `${course.url}`;
    classCard.target = `_blank`;

    document.querySelector("#class-list").appendChild(classCard);
  });
}

function creditCount(courseList) {
  const sumCredits = courseList.reduce((accumulator, item) => accumulator + item.credits, 0);
  return sumCredits;
}

const allButton = document.querySelector("#all-classes");
const cseButton = document.querySelector("#cse-classes");
const wddButton = document.querySelector("#wdd-classes");
const container = document.querySelector("#class-list");
const countContainer = document.querySelector("#credit-count");

countContainer.innerHTML = `The total credits for courses listed above is ${creditCount(courses)}.`;

allButton.addEventListener("click", () => {
  container.innerHTML = "";
  countContainer.innerHTML = "";
  createList(courses);
  countContainer.innerHTML = `The total credits for courses listed above is ${creditCount(courses)}.`;
});

cseButton.addEventListener("click", () => {
  container.innerHTML = "";
  countContainer.innerHTML = "";
  const list = courses.filter((course) => course.category === "cse");
  createList(list);
  countContainer.innerHTML = `The total credits for courses listed above is ${creditCount(list)}.`;
});

wddButton.addEventListener("click", () => {
  container.innerHTML = "";
  countContainer.innerHTML = "";
  const list = courses.filter((course) => course.category === "wdd");
  createList(list);
  countContainer.innerHTML = `The total credits for courses listed above is ${creditCount(list)}.`;
});
