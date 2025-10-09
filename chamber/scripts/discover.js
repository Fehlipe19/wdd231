const attractionURL = "https://fehlipe19.github.io/wdd231/chamber/data/discover.json";

const attraction = document.querySelector("#attractions");

async function getAttractionsData() {
  const res = await fetch(attractionURL);
  const data = await res.json();
  console.table(data);
  displayAttractions(data.attractions);
}

const displayAttractions = (attractions) => {
  attractions.forEach((attractionInfo) => {
    const attractionCard = document.createElement("div");
    attractionCard.classList.add("attraction-card");
    const aTitle = document.createElement("h2");
    const aAddress = document.createElement("address");
    const aDescription = document.createElement("p");
    const aFigure = document.createElement("img");
    const btn = document.createElement("button");

    aTitle.textContent = `${attractionInfo.title}`;
    aAddress.textContent = `Address: ${attractionInfo.address}`;
    aDescription.textContent = `${attractionInfo.description}`;
    aFigure.setAttribute("src", attractionInfo.figure);
    aFigure.setAttribute("alt", `Image of ${attractionInfo.title}`);
    aFigure.setAttribute("loading", "lazy");
    aFigure.setAttribute("height", "200");
    // aFigure.setAttribute("width", "300");
    btn.textContent = "Learn More";

    attractionCard.appendChild(aTitle);
    attractionCard.appendChild(aAddress);
    attractionCard.appendChild(aDescription);
    attractionCard.appendChild(aFigure);
    attractionCard.appendChild(btn);

    attraction.appendChild(attractionCard);
  });
};

getAttractionsData();
