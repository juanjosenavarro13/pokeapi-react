import { Pokemon } from '@/api/types/getPokemonDetail';
import { CardPokemon } from '../card-pokemon';

interface Props {
  pokemons: Pokemon[];
}

export function CardPokemonList(props: Props) {
  const { pokemons } = props;
  return pokemons.map((pokemon) => {
    return <CardPokemon key={pokemon.id} pokemon={pokemon} />;
  });
}
