const gen1 = 1<150
const get2 = 151<250
const gen3 = 251<385
const allPokemon = fetchPokemon();


async function fetchPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    const result = await response.json();
    return result;
  }
  fetchPokemon().then(result => {
    return result;
  });

