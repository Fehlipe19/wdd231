// export { url };
const url = "https://fehlipe19.github.io/wdd231/chamber/data/members.json";
const membershipURL = "https://fehlipe19.github.io/wdd231/chamber/data/membershipLevels.json";

// console.log(members);
const cards = document.querySelector("#directory");

async function getDirectoryData() {
  const response = await fetch(url);
  const data = await response.json();
  //   console.table(data);
  displayDirectory(data.companies);
}

async function getMembershipLevelData() {
  const response = await fetch(membershipURL);
  const data = await response.json();

  let membershipList = document.querySelectorAll(".membership-card");
  let infor = data.levels;

  membershipList.forEach((item) => {
    item.addEventListener("click", () => {
      //Display individual level information
      switch (item.id) {
        case "np-card":
          displayMembershipLevelDetails(infor[0]);
          break;
        case "bronze-card":
          displayMembershipLevelDetails(infor[1]);
          break;
        case "silver-card":
          displayMembershipLevelDetails(infor[2]);
          break;
        case "gold-card":
          displayMembershipLevelDetails(infor[3]);
        default:
          console.log("Error getting infor");
      }
    });
  });
}

const displayDirectory = (companies) => {
  companies.forEach((company) => {
    const companyCard = document.createElement("section");
    const cardTitle = document.createElement("div");
    const cardInfo = document.createElement("div");
    const cardSideText = document.createElement("div");
    const name = document.createElement("h2");
    const tagline = document.createElement("p");
    const email = document.createElement("a");
    const phone = document.createElement("a");
    const url = document.createElement("a");
    const logo = document.createElement("img");

    companyCard.classList.add("company-card");
    cardTitle.classList.add("card-title");
    cardInfo.classList.add("card-info");
    cardSideText.classList.add("card-side-text");

    name.textContent = company.name;
    tagline.textContent = company.tagline;
    email.innerHTML = `<strong>Email: </strong>${company.email}`;
    email.setAttribute("href", `mailto:${company.email}`);
    phone.innerHTML = `<strong>Phone: </strong>${company.phone}`;
    phone.setAttribute("href", `tel:${company.phone}`);
    url.innerHTML = `<strong>URL: </strong>${company.url}`;
    url.setAttribute("href", company.url);
    url.setAttribute("target", "_blank");
    logo.setAttribute("src", company.image);
    logo.setAttribute("alt", `Logo of ${company.name}`);
    logo.setAttribute("loading", "lazy");
    // logo.setAttribute("width", "340");
    // logo.setAttribute("height", "440");

    console.log(company.image);

    cardTitle.appendChild(name);
    cardTitle.appendChild(tagline);
    companyCard.appendChild(cardTitle);
    cardInfo.appendChild(logo);
    cardSideText.appendChild(email);
    cardSideText.appendChild(phone);
    cardSideText.appendChild(url);
    cardInfo.appendChild(cardSideText);
    companyCard.appendChild(cardInfo);

    cards.appendChild(companyCard);
  });
};

function displayMembershipLevelDetails(membership) {
  membershipDetails = document.querySelector("#membership-details");
  membershipDetails.innerHTML = "";
  membershipDetails.innerHTML = `
      <button id="closeModal">❌</button>
      <h2>${membership.title}</h2>
      <p><strong>Price</strong>: ${membership.cost}</p>
      <p><strong>Benefits</strong>: ${membership.benefits}</p>
    `;

  membershipDetails.showModal();
  closeModal.addEventListener("click", () => {
    membershipDetails.close();
  });
}

getDirectoryData();
getMembershipLevelData();
