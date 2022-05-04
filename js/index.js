const pokedex = document.getElementById('pokedex');

const typeOne = document.getElementById('type1selector');

const renderPokemon = (pokemon) => {
  const pokemonHTMLstring = pokemon
    .map((pokeman) => {
      let [classOne, classTwo] = [pokeman.type, null];

      if (pokeman.type.split(' ').length > 1) {
        [classOne, classTwo] = pokeman.type.split(' ');
      }

      let typeHtmlString = `<span>Type:</span><p  class="type-sub pill ${classOne}"> ${pokeman.type}</p>`;
      if (classTwo) {
        typeHtmlString = `<span>Type:</span><span class="type-sub pill ${classOne}"> ${classOne}</span><span class="pill type-sub ${classTwo}"> ${classTwo}</span>`;
      }

      return ` <li class ="card">
                <img class='card-image poke-image' onmouseover="this.src='${pokeman.shiny}'" onmouseout="this.src='${pokeman.image}'"  src='${pokeman.image}' />
                <h2 class="card-title">${pokeman.id}.${pokeman.name}</h2>
                ${typeHtmlString}
                </li>`;
    })
    .join('');

  pokedex.innerHTML = pokemonHTMLstring;
};
//

// GEN ONE
// ----------------------------------------------------------------------------------------
const genOnePokemon = () => {
  const promises = [];
  for (let i = 1; i <= 151; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  Promise.all(promises).then((results) => {
    const pokemon1 = results.map((data) => ({
      name: data.name,
      id: data.id,
      image: data.sprites.front_default,
      shiny: data.sprites.front_shiny,
      type: data.types.map((type) => type.type.name).join(' '),
    }));

    renderPokemon(pokemon1);
  });
};
genOnePokemon();

// GEN ONE END
// ----------------------------------------------------------------------------------------
const genTwoPokemon = (typeOne) => {
  console.log('Gen TWO pokemon!');
  const promises = [];
  for (let i = 152; i <= 252; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  Promise.all(promises).then((results) => {
    const pokemon2 = results.map((data) => ({
      name: data.name,
      id: data.id,
      image: data.sprites.front_default,
      shiny: data.sprites.front_shiny,
      type: data.types.map((type) => type.type.name).join(' '),
    }));

    renderPokemon(pokemon2);
  });
};

const genThreePokemon = () => {
  console.log('Gen THREE pokemon!');
  const promises = [];
  for (let i = 252; i <= 385; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  Promise.all(promises).then((results) => {
    const pokemon3 = results.map((data) => ({
      name: data.name,
      id: data.id,
      image: data.sprites.front_default,
      shiny: data.sprites.front_shiny,
      type: data.types.map((type) => type.type.name).join(' '),
    }));
    renderPokemon(pokemon3);
  });
};

const selector = document.getElementById('genselector');

selector.addEventListener('change', (event) => {
  if (selector.value === 'gen1') {
    return genOnePokemon();
  }
  if (selector.value === 'gen2') {
    return genTwoPokemon();
  }
  if (selector.value === 'gen3') {
    return genThreePokemon();
  }
  return true;
});

function loopCards() {
  for (let i = 0; i <= 385; i++) {}
}

loopCards();

const searchInput = document.getElementById('search');
function searchPokemon(event) {
  const input = event.target.value.toLowerCase();

  let cards = document.getElementsByClassName('card-title');
  cards = Array.from(cards); // cards = [...cards];

  cards.forEach((el) => {
    if (!el.textContent.toLowerCase().includes(input)) {
      el.parentElement.style.display = 'none';
    } else {
      el.parentElement.style.display = '';
    }
  });
}
searchInput.addEventListener('keyup', searchPokemon);
