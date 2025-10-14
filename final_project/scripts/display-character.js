const charactersURL = "https://fehlipe19.github.io/wdd231/final_project/data/character.json";

async function getCharacterData() {
  try {
    const response = await fetch(charactersURL);
    const data = await response.json();
    console.table(typeof data);

    return data;
  } catch (error) {
    console.error("Error fetching character data:", error);
  }
}

document.querySelector("#generate-character-btn").addEventListener("click", () => {
  console.log("Button clicked");
  displayCharacterDialog();
});

function createCharacterCard(characterList) {
  characterList.forEach((character) => {
    const characterCard = document.createElement("div");
    characterCard.classList.add("character-card");

    characterCard.innerHTML = `
    <h2>${character.name}</h2>
    <h3>${character.class}</h3>
    <p><span>Stats: </span>${character.primary_stat}, ${character.secondary_stat}</p>
    <p><span>HitDie: </span>${character.hit_die}</p>
    <img loading="lazy" src="${character.imageURL}" alt="Fantasy ${character.class}">
    `;
    console.log(character.imageURL);
    document.querySelector(".card-container").appendChild(characterCard);
  });
}

const displayDialog = document.getElementById("character-dialog");

async function displayCharacterDialog() {
  displayDialog.innerHTML = "";
  const characterList = await getCharacterData();
  console.log(characterList);
  const randomId = getRandomFloat(1, 15).toFixed();
  const character = characterList.find((char) => char.id == randomId);

  console.log(character);
  displayDialog.innerHTML = `
    <button id="closeModal">❌</button>
     <h2>${character.name}</h2>
    <h3>${character.class}</h3>
    <p><span>Stats: </span>${character.primary_stat}, ${character.secondary_stat}</p>
    <p><span>HitDie: </span>${character.hit_die}</p>
    <img loading="lazy" src="${character.imageURL}" alt="Fantasy ${character.class}">
    `;
  displayDialog.showModal();
  closeModal.addEventListener("click", () => {
    displayDialog.close();
  });
}

function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
