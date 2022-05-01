const pokedex = document.getElementById('pokedex');

const typeOne = document.getElementById('type1selector');

const renderPokemon = (pokemon) => {
  console.log(pokemon);
  // console.log(pokemon[1].name);
  const pokemonHTMLstring = pokemon
    .map((pokeman) => {
      let [classOne, classTwo] = [pokeman.type, null];

      if (pokeman.type.split(' ').length > 1) {
        [classOne, classTwo] = pokeman.type.split(' ');
        // classOne = pokeman.type.split(' ')[0];
        // classTwo = pokeman.type.split(' ')[1];
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
    // Stores all promises(pokemon) into an array.
  }
  Promise.all(promises).then((results) => {
    // Converts it to a format that loads all Pokemon at one time as opposed to having
    // each loop run one after the other.
    const pokemon1 = results.map((data) => ({
      name: data.name,
      id: data.id,
      image: data.sprites.front_default,
      shiny: data.sprites.front_shiny,
      type: data.types.map((type) => type.type.name).join(' '),
    }));

    // if (typeOne != 'all') {

    // }
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
    // Stores all promises(pokemon) into an array.
  }
  Promise.all(promises).then((results) => {
    // Converts it to a format that loads all Pokemon at one time as opposed
    //  to having each loop run one after the other.
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
    // Stores all promises(pokemon) into an array.
  }
  Promise.all(promises).then((results) => {
    // Converts it to a format that loads all Pokemon at one time as opposed
    // to having each loop run one after the other.
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

// Event listener for Generation Selection
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

// typeOne.addEventListener('change', (e) => {
//   const typeOneValue = e.target.value;

//   if (selector.value === 'gen1') {
//     return genOnePokemon(typeOneValue);
//   }
//   if (selector.value === 'gen2') {
//     return genTwoPokemon(typeOneValue);
//   }
//   if (selector.value === 'gen3') {
//     return genThreePokemon(typeOneValue);
//   }
// });

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
    // console.log(el.textContent.toLowerCase().includes(input));
    if (!el.textContent.toLowerCase().includes(input)) {
      el.parentElement.style.display = 'none';
    } else {
      el.parentElement.style.display = '';
    }
  });
}
searchInput.addEventListener('keyup', searchPokemon);

// searchPokemon();
// backgroundColour.addEventListener('change', event => {
//   if (backgroundColour.indexOf(colour)  )
// })

// // function searchFilter() {
//   // Declare variables
//   var input, filter, ul, li, a, i, txtValue;
//   input = document.getElementById('search');
//   filter = input.value.toUpperCase();
//   ol = document.getElementById("pokedex");
//   li = ol.getElementsByTagName('li');

//   // Loop through all list items, and hide those who don't match the search query
//   for (i = 0; i < li.length; i++) {
//     h2 = li[i].getElementsByTagName("h2")[0];
//     txtValue = a.textContent || h2.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }

// searchFilter();

// testFunction()
// const promises = [];
//   for(let i=152; i<=gen2; i++) {
//     const url = `https://pokeapi.co/api/v2/pokemon/${i}`
//     promises.push(fetch(url).then((res) => res.json())); //Stores all promises(pokemon) into an array.
//   }
//   Promise.all(promises).then((results) => { //Converts it to a format that loads all Pokemon at one time as opposed to having each loop run one after the other.
//     const pokemon = results.map((data) => ({
//             name: data.name,
//             id: data.id,
//             image: data.sprites['front_default'],
//             shiny: data.sprites['front_shiny'],
//             type: data.types.map((type) => type.type.name).join(', ')
//     }));
//     console.log(pokemon)
//   });

// const GENERATION = {
//   'ONE': {'start':1, 'stop':151},
//   'TWO': {'start':152, 'stop':251},
//   'THREE': {'start':252, 'stop':385}
// }

// let testData = async ({start, stop}) => {
//   let promises = [];
//   let pokemon = [];
//   for(let i=start; i<=stop; i++) {
//     const url = `https://pokeapi.co/api/v2/pokemon/${i}`
//     promises.push(fetch(url).then((res) => res.json())); //Stores all promises(pokemon) into an array.
//   }
//   return await Promise.all(promises).then((results) => { //Converts it to a format that loads all Pokemon at one time as opposed to having each loop run one after the other.
//     pokemon = results.map((data) => ({
//             name: data.name,
//             id: data.id,
//             image: data.sprites['front_default'],
//             shiny: data.sprites['front_shiny'],
//             type: data.types.map((type) => type.type.name).join(', ')
//     }));
//     // console.log(pokemon)
//     return pokemon
//   });

// }
// console.log(testData(GENERATION.ONE));
// console.log(testData(GENERATION.TWO));
// console.log(testData(GENERATION.THREE));
