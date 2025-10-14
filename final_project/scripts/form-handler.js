const searchSubmission = "form_submitted";
const currentURL = window.location.href;
const message = document.querySelector("h1");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const city = urlParams.get("city");

document.addEventListener("DOMContentLoaded", () => {
  if (currentURL.includes(searchSubmission)) {
    let counter = parseInt(localStorage.getItem("locations-submitted") || "0", 10);
    counter++;
    let counter_string = counter.toString();
    localStorage.setItem("locations-submitted", counter_string);
    localStorage.setItem("cities", city);
  }
});
