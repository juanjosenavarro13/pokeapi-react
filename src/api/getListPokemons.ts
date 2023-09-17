import { useEffect, useState } from 'react';
import { getListPokemonsConstants } from './constants/getListPokemons';
import { getPokemonDetail } from './getPokemonDetail';
import {
  IGetPokemonsList,
  IGetPokemonsListWithRealData,
} from './types/getPokemonsList';

export function usePokemonList(page: number, limit: number = 25) {
  const [data, setData] = useState<IGetPokemonsListWithRealData>({
    count: 0,
    next: null,
    totalPages: 0,
    previous: null,
    results: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const offset = limit * page - limit;

  const endpoint = getListPokemonsConstants.endpoint_list
    .replace('{offset}', String(offset))
    .replace('{limit}', String(limit));

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(endpoint)
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
          setData({
            ...data.data,
            results: pokemonDetails,
            totalPages: data.data.count / limit,
          });
        });
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, endpoint, limit]);

  return { data, loading, error };
}
