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
const displayDialog = document.getElementById("time-dialog");
// let lastVisit = 0;

// console.log(`Last visit: ${lastVisit}`);

function calculateDate() {
  let lastVisit = localStorage.getItem("lastVisit");
  //   console.log(`Last visit: ${lastVisit}
  //                 Current Visit: ${currentVisit}`);
  displayDialog.innerHTML = "";
  if (lastVisit === null) {
    displayDialog.innerHTML = `
        <button id="closeModal">❌</button>
        <h3>This is your first visit!</h3>
    `;
    displayDialog.showModal();
    closeModal.addEventListener("click", () => {
      displayDialog.close();
    });
  } else if (currentVisit - lastVisit < msToDays) {
    displayDialog.innerHTML = `
        <button id="closeModal">❌</button>
        <h3>Back so soon! Awesome!</h3>
    `;
    displayDialog.showModal();
    closeModal.addEventListener("click", () => {
      displayDialog.close();
    });
  } else {
    const daysSinceLastVisit = Math.round((currentVisit - lastVisit) / msToDays);
    displayDialog.innerHTML = `
        <button id="closeModal">❌</button>
        <h3>You last visited ${daysSinceLastVisit} days ago.</h3>
    `;
    displayDialog.showModal();
    closeModal.addEventListener("click", () => {
      displayDialog.close();
    });
  }
  localStorage.setItem("lastVisit", currentVisit);
}

calculateDate();
