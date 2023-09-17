import { Pokemon } from './types/getPokemonDetail';

export function getPokemonDetail(url: string): Promise<Pokemon> {
  return fetch(url)
    .then((res): Promise<Pokemon> => res.json())
    .then((pokemon: Pokemon): Pokemon => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        weight: pokemon.weight,
        height: pokemon.height,
        sprites: {
          back_default: pokemon.sprites.back_default,
          back_female: pokemon.sprites.back_female,
          back_shiny: pokemon.sprites.back_shiny,
          back_shiny_female: pokemon.sprites.back_shiny_female,
          front_default: pokemon.sprites.front_default,
          front_female: pokemon.sprites.front_female,
          front_shiny: pokemon.sprites.front_shiny,
          front_shiny_female: pokemon.sprites.front_shiny_female,
        },
        types: pokemon.types,
      };
    });
}
