const API = "https://rpg-creature-api.freecodecamp.rocks/api/creature";

document.getElementById("search-button").addEventListener("click", async () => {
  const query = document.getElementById("search-input").value.trim();

  if (!query) return;

  let data;
  try {
    const res = await fetch(`${API}/${query}`);
    const text = await res.text();
    try {
      data = JSON.parse(text);
    } catch {
      alert("Creature not found");
      return;
    }
  } catch {
    alert("Creature not found");
    return;
  }

  if (!data || data.error || !data.name) {
    alert("Creature not found");
    return;
  }

  document.getElementById("creature-name").textContent = data.name.toUpperCase();
  document.getElementById("creature-id").textContent = `#${data.id}`;
  document.getElementById("weight").textContent = `Weight: ${data.weight}`;
  document.getElementById("height").textContent = `Height: ${data.height}`;

  const typesEl = document.getElementById("types");
  typesEl.innerHTML = "";
  data.types.forEach(t => {
    const span = document.createElement("span");
    span.textContent = t.name.toUpperCase();
    typesEl.appendChild(span);
  });

  document.getElementById("hp").textContent = data.stats[0].base_stat;
  document.getElementById("attack").textContent = data.stats[1].base_stat;
  document.getElementById("defense").textContent = data.stats[2].base_stat;
  document.getElementById("special-attack").textContent = data.stats[3].base_stat;
  document.getElementById("special-defense").textContent = data.stats[4].base_stat;
  document.getElementById("speed").textContent = data.stats[5].base_stat;

  const img = document.getElementById("creature-img");
  img.src = data.sprites?.front_default || "";
  img.alt = data.name;

  document.getElementById("card").style.display = "block";
});