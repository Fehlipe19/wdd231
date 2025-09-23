const courses = [
  {
    category: "wdd",
    name: "WDD130",
    url: "https://fehlipe19.github.io/wdd130/",
    credits: 2,
    completed: true,
    technology: ["HTML", "CSS"],
    certificate: "Web & Computer Programming v2021SP",
    description:
      "This class serves as an introduction to Web design and development. The course is designed to introduce students to basics of Web technology, Web design and development principles. This course uses hands-on activities, with students actually participating in simple Web design projects and programming. It is anticipated that students who complete this course will understand the fields of Web design and development and will have a good idea of whether or not they want to pursue Web Design and development as a career.",
  },
  {
    category: "wdd",
    name: "WDD131",
    url: "https://fehlipe19.github.io/wdd131/",
    credits: 2,
    completed: true,
    technology: ["HTML", "CSS", "JS"],
    certificate: "Web & Computer Programming v2021SP",
    description:
      "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
  },
  {
    category: "wdd",
    name: "WDD231",
    url: "https://fehlipe19.github.io/wdd231/",
    credits: 2,
    completed: false,
    technology: ["HTML", "CSS", "JS", "API"],
    certificate: "Web & Computer Programming v2021SP",
    description:
      "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
  },
  {
    category: "wdd",
    name: "WDD330",
    url: "#",
    credits: 3,
    completed: false,
    technology: ["HTML", "CSS", "JS", "API"],
    certificate: "Web Development v2020SP",
    description:
      "This course is designed to give students the skills required to create web applications using HTML, CSS , and JavaScript. It is intended to help the student learn to do this without the aid of third-party frameworks or libraries. Because of this, the course focuses on how to solve larger, ill-structured business problems by designing and creating web applications.",
  },
  {
    category: "cse",
    name: "CSE111",
    url: "https://github.com/Fehlipe19/cse111",
    credits: 2,
    completed: true,
    technology: ["PYTHON"],
    certificate: "Web & Computer Programming v2021SP",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call, debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
  },
];
createList(courses);

console.log(courses[1].technology.join(", "));

function createList(filteredCourses) {
  filteredCourses.forEach((course) => {
    const classCard = document.createElement("div");
    classCard.classList.add("class-link");
    if (course.completed) {
      classCard.classList.add("completed");
    }

    classCard.textContent = `${course.name}`;
    // classCard.href = `${course.url}`;
    // classCard.target = `_blank`;

    document.querySelector("#class-list").appendChild(classCard);
    classCard.addEventListener("click", () => {
      displayCourseDetails(course);
    });
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

function displayCourseDetails(course) {
  courseDetails = document.querySelector("#course-details");
  courseDetails.innerHTML = "";
  courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(", ")}</p>
  `;
  courseDetails.showModal();

  closeModal.addEventListener("click", () => {
    courseDetails.close();
  });
}

// courseDiv.addEventListener("click", () => {
//   displayCourseDetails(course);
// });
