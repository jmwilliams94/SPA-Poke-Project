const gen1 = 150
// const get2 = 151<250
// const gen3 = 251<385

const allPokemon = async (id) => {
  const promises = [];
  for(let i=1; i<=gen1; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await res.json();

          const gen1pokemon = {
            name: data.name,
            id: data.id,
            image: data.sprites['front_default'],
            type: data.types
            .map((type) => type.type.name)
            .join(', ')
          };
          console.log(gen1pokemon);
        } 
};
allPokemon();

// const fetchGeneration1 = async () => {
//   for(let i=1; i<=gen1; i++) {
//     const gen1poke = await allPokemon(i);
//     console.log(gen1poke)
//   }
// }
// fetchGeneration1();
// // Add in catch
