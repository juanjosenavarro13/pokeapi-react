import { useEffect, useState } from 'react';
import { Pokemon } from './types/getPokemonDetail';
import { getListPokemonsConstants } from './constants/getListPokemons';
import { useNavigate } from 'react-router-dom';

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

export function usePokemonDetail(id: string | undefined) {
  const navigate = useNavigate();
  const [data, setData] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    if (id) {
      getPokemonDetail(
        getListPokemonsConstants.endpoint_detail.replace('{id}', id),
      )
        .then((pokemon) => {
          setData(pokemon);
        })
        .catch(() => {
          navigate('/error');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id, navigate]);

  return { data, loading };
}
