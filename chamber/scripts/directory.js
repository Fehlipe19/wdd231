const url = "https://fehlipe19.github.io/wdd231/chamber/data/members.json";

// console.log(members);
const cards = document.querySelector("#directory");

async function getDirectoryData() {
  const response = await fetch(url);
  const data = await response.json();
  //   console.table(data);
  displayDirectory(data.companies);
}

const displayDirectory = (companies) => {
  companies.forEach((company) => {
    const companyCard = document.createElement("section");
    const cardTitle = document.createElement("div");
    const name = document.createElement("h2");
    const tagline = document.createElement("p");
    const email = document.createElement("a");
    const phone = document.createElement("a");
    const url = document.createElement("a");
    const logo = document.createElement("img");

    name.textContent = company.name;
    tagline.textContent = company.tagline;
    email.textContent = company.email;
    email.setAttribute("href", `mailto:${company.email}`);
    phone.textContent = company.phone;
    phone.setAttribute("href", `tel:${company.phone}`);
    url.textContent = company.url;
    url.setAttribute("href", company.url);
    url.setAttribute("target", "_blank");
    logo.setAttribute("src", company.image);
    logo.setAttribute("alt", `Logo of ${company.name}`);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "340");
    logo.setAttribute("height", "440");

    console.log(company.image);

    cardTitle.appendChild(name);
    cardTitle.appendChild(tagline);
    companyCard.appendChild(cardTitle);
    companyCard.appendChild(logo);
    companyCard.appendChild(email);
    companyCard.appendChild(phone);
    companyCard.appendChild(url);

    cards.appendChild(companyCard);
  });
};

getDirectoryData();
