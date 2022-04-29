const gen1 = 151
const gen2 = 251
const gen3 = 385
const pokedex = document.getElementById('pokedex');
console.log(pokedex);

const genOnePokemon = () => {
  const promises = [];
  for(let i=1; i<=gen1; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`
    promises.push(fetch(url).then((res) => res.json())); //Stores all promises(pokemon) into an array.
  } 
  Promise.all(promises).then((results) => { //Converts it to a format that loads all Pokemon at one time as opposed to having each loop run one after the other.
    const pokemon1 = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
            shiny: data.sprites['front_shiny'],
            type: data.types.map((type) => type.type.name).join(', ')
          }));
          displayPokemon(pokemon1);
  });
};

const displayPokemon = (pokemon) => {
  console.log(pokemon);
  const pokemonHTMLstring = pokemon.map( pokeman => `
  <li class ="card">
    <img class="card-image" src="${pokeman.image}"/>
    <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
    <p class="type-sub">Type: ${pokeman.type}</p>
  </li>
  `
  ).join('');
  pokedex.innerHTML = pokemonHTMLstring;
};


genOnePokemon();

const genTwoPokemon = () => {
  const promises = [];
  for(let i=152; i<=gen2; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`
    promises.push(fetch(url).then((res) => res.json())); //Stores all promises(pokemon) into an array.
  } 
  Promise.all(promises).then((results) => { //Converts it to a format that loads all Pokemon at one time as opposed to having each loop run one after the other.
    const pokemon2 = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
            shiny: data.sprites['front_shiny'],
            type: data.types.map((type) => type.type.name).join(', ')
    }));
    console.log(pokemon2)
  });
};

genTwoPokemon();

const genThreePokemon = () => {
  const promises = [];
  for(let i=252; i<=gen3; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`
    promises.push(fetch(url).then((res) => res.json())); //Stores all promises(pokemon) into an array.
  } 
  Promise.all(promises).then((results) => { //Converts it to a format that loads all Pokemon at one time as opposed to having each loop run one after the other.
    const pokemon3 = results.map((data) => ({
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
            shiny: data.sprites['front_shiny'],
            type: data.types.map((type) => type.type.name).join(', ')
    }));
    console.log(pokemon3)
  });
};

genThreePokemon();







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
