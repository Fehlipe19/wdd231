const url = "https://fehlipe19.github.io/wdd231/chamber/data/discover.json";

const attraction = document.querySelector("#attractions");

async function getAttractionsData() {
  const res = await fetch(url);
  const data = await res.json();
  console.table(data);
  // displayAttractions(data.attractions);
}
