import { Pokemon } from '../../api/types/getPokemonDetail';
import { CardPokemon } from '../card-pokemon/card-pokemon';
import { Container } from './card-pokemon-list-styled';

interface Props {
  pokemons: Pokemon[];
}

export function CardPokemonList(props: Props) {
  const { pokemons } = props;
  return (
    <Container>
      {pokemons.map((pokemon) => {
        return <CardPokemon key={pokemon.id} pokemon={pokemon} />;
      })}
    </Container>
  );
}
