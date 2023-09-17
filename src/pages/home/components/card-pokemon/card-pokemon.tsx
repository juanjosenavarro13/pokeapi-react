import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CardPokemonImage, ColorName } from './';
import { Pokemon } from '@/api/types/getPokemonDetail';

interface Props {
  pokemon: Pokemon;
}

export function CardPokemon(props: Props) {
  const { pokemon } = props;
  const { sprites, types, id } = pokemon;
  const { front_default, front_shiny } = sprites;
  const [showFront, setShowFront] = useState<boolean>(true);

  return (
    <Link
      to={`/pokemon/${id}`}
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
    </Link>
  );
}
