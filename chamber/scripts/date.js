const currentDate = new Date();
const year = currentDate.getFullYear();
const oLastModified = new Date(document.lastModified);

const currentYear = document.getElementById("currentYear");
const lastModifiedP = document.getElementById("lastModified");

console.log(`Current Year: ${year}`);

currentYear.textContent = `${year}`;
lastModifiedP.textContent = `Last Modification: ${oLastModified.toLocaleString()}`;

const msToDays = 86400000;
const currentVisit = Date.now();
// let lastVisit = 0;

// console.log(`Last visit: ${lastVisit}`);

function calculateDate() {
  let lastVisit = localStorage.getItem("lastVisit");
  //   console.log(`Last visit: ${lastVisit}
  //                 Current Visit: ${currentVisit}`);
  if (lastVisit === null) {
    console.log("First time visiting.");
  } else if (currentVisit - lastVisit < msToDays) {
    console.log("Last visit was less than 24 hours ago.");
  } else {
    const daysSinceLastVisit = Math.round((currentVisit - lastVisit) / msToDays);
    console.log(`It's been ${daysSinceLastVisit} days since your last visit.`);
  }
  localStorage.setItem("lastVisit", currentVisit);
}

calculateDate();
