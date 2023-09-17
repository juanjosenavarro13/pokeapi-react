import { useEffect, useState } from 'react';
import { getListPokemonsConstants } from './constants/getListPokemons';
import { getPokemonDetail } from './getPokemonDetail';
import {
  IGetPokemonsList,
  IGetPokemonsListWithRealData,
} from './types/getPokemonsList';

export function usePokemonList() {
  const [data, setData] = useState<IGetPokemonsListWithRealData>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(getListPokemonsConstants.endpoint)
      .then((res) => res.json())
      .then((data: IGetPokemonsList) => {
        return {
          promises: data.results.map((pokemon) =>
            getPokemonDetail(pokemon.url),
          ),
          data: data,
        };
      })
      .then((data) => {
        Promise.all(data.promises).then((pokemonDetails) => {
          setData({ ...data.data, results: pokemonDetails });
        });
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}
