const currentDate = new Date();
const year = currentDate.getFullYear();
const oLastModified = new Date(document.lastModified);

const currentYear = document.getElementById("currentYear");
const lastModifiedP = document.getElementById("lastModified");

console.log(`Current Year: ${year}`);

currentYear.textContent = `${year}`;
lastModifiedP.textContent = `Last Modification: ${oLastModified.toLocaleString()}`;
