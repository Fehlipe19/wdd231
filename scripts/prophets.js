const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json";

const cards = document.querySelector("#cards");

async function getProphetsData() {
  const response = await fetch(url);
  const data = await response.json();
  //   console.table(data.prophets);
  displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const prophetCard = document.createElement("section");
    const fullName = document.createElement("h2");
    const birthDate = document.createElement("p");
    const birthPlace = document.createElement("p");
    const portrait = document.createElement("img");

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}`);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    prophetCard.appendChild(fullName);
    prophetCard.appendChild(birthDate);
    prophetCard.appendChild(birthPlace);
    prophetCard.appendChild(portrait);

    cards.appendChild(prophetCard);
  });
};

getProphetsData();
