const listURL = "https://fehlipe19.github.io/wdd231/chamber/data/members.json";
// import { url } from "./directory.js";

const spotlightCards = document.querySelector("#company-spotlights");

async function getSpotlightData() {
  const response = await fetch(listURL);
  const data = await response.json();

  let spotlightList = getSpotlights(data.companies);
  displaySpotlights(spotlightList);
}

function getSpotlights(list) {
  const spotlightCompanies = list.filter((company) => company.membership === "Silver" || company.membership === "Gold");
  console.log(spotlightCompanies);
  return spotlightCompanies;
}

function getRandomCompany(spotlightCompanies) {
  let list = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * spotlightCompanies.length);
    if (list.includes(spotlightCompanies[randomIndex])) {
      i--;
      continue; //very handy, this one.
    }
    list.push(spotlightCompanies[randomIndex]);
  }
  console.log(list);
  return list;
}

const displaySpotlights = (companies) => {
  const spotlightCompanies = getRandomCompany(companies);

  spotlightCompanies.forEach((company) => {
    const spotlightCard = document.createElement("article");
    const cardTitle = document.createElement("div");
    const cardInfo = document.createElement("div");
    const cardInfoText = document.createElement("div");
    const businessName = document.createElement("h2");
    const tagline = document.createElement("p");
    const email = document.createElement("a");
    const phone = document.createElement("a");
    const logo = document.createElement("img");
    const cardURL = document.createElement("a");

    spotlightCard.classList.add("spotlight-card", "summary");
    cardTitle.classList.add("spotlight-card-title");
    cardInfo.classList.add("spotlight-card-info");
    cardInfoText.classList.add("spotlight-card-text");

    businessName.textContent = company.name;
    tagline.textContent = company.tagline;
    email.innerHTML = `<strong>Email: </strong>${company.email}<br>`;
    email.setAttribute("href", `mailto:${company.email}`);
    phone.innerHTML = `<strong>Phone: </strong>${company.phone}<br>`;
    phone.setAttribute("href", `tel:${company.phone}`);
    logo.setAttribute("src", company.image);
    logo.setAttribute("alt", `Logo of ${company.name}`);
    logo.setAttribute("loading", "lazy");
    logo.classList.add("spotlight-logo");
    cardURL.innerHTML = `<strong>URL: </strong>${company.url}<br>`;
    cardURL.setAttribute("href", company.url);
    cardURL.setAttribute("target", "_blank");
    cardURL.classList.add("spotlight-button");

    cardTitle.appendChild(businessName);
    cardTitle.appendChild(tagline);
    spotlightCard.appendChild(cardTitle);
    cardInfo.appendChild(logo);
    cardInfoText.appendChild(email);
    cardInfoText.appendChild(phone);
    cardInfoText.appendChild(cardURL);
    cardInfo.appendChild(cardInfoText);
    spotlightCard.appendChild(cardInfo);

    spotlightCards.appendChild(spotlightCard);
  });
};

getSpotlightData();
