import { Pokemon } from './types/getPokemonDetail';

export function getPokemonDetail(url: string): Promise<Pokemon> {
  return fetch(url)
    .then((res): Promise<Pokemon> => res.json())
    .then((pokemon) => {
      return {
        name: pokemon.name,
      };
    });
}
