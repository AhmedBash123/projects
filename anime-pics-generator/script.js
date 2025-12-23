const btnEl = document.getElementById('btn');
const imageEl = document.querySelector('.anime-img');
const animeContainer = document.querySelector('.anime-container');
const animeNameEl = document.querySelector('.anime-name');

btnEl.addEventListener('click', async function () {
  try {
    btnEl.disabled = true;
    btnEl.innerText = 'loading...';
    animeNameEl.textContent = 'Updating...';
    imageEl.src = 'icon.svg';
    const response = await fetch(
      'https://dragonball-api.com/api/characters?limit=58'
    );
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = 'Get Anime';
    const characters = data.items;
    const randomIndex = Math.floor(Math.random() * characters.length);
    const character = characters[randomIndex];
    const url = character.image;
    const animeName = character.name;
    animeContainer.style.display = 'block';
    imageEl.src = url;
    animeNameEl.textContent = animeName;
  } catch (error) {
    console.error(error);
    animeNameEl.textContent = 'Failed to load anime';
    btnEl.disabled = false;
    btnEl.innerText = 'Get Anime';
  }
});
