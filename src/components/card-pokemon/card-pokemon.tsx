import { useState } from 'react';
import { Pokemon } from '../../api/types/getPokemonDetail';
import { CardPokemonImage } from './card-pokemon-imagen';
import { ColorName } from './card-pokemon-styles';

interface Props {
  pokemon: Pokemon;
}

export function CardPokemon(props: Props) {
  const { pokemon } = props;
  const { sprites, types } = pokemon;
  const { front_default, front_shiny } = sprites;
  const [showFront, setShowFront] = useState<boolean>(true);

  return (
    <div
      onMouseEnter={() => {
        setShowFront(false);
      }}
      onMouseLeave={() => {
        setShowFront(true);
      }}
    >
      <CardPokemonImage
        front={front_default}
        back={front_shiny}
        showFront={showFront}
      />
      <ColorName $inputColor={types[0].type.name}>{pokemon.name}</ColorName>
    </div>
  );
}
