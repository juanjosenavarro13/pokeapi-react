import { Pokemon } from './getPokemonDetail';

export interface IGetPokemonsList {
  count: number;
  next: string | null;
  previous: string | null;
  results: Results[];
}

export interface IGetPokemonsListWithRealData {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

interface Results {
  name: string;
  url: string;
}
