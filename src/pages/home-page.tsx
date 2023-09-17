import { usePokemonList } from '../api/getListPokemons';
import { CardPokemonList } from '../components/cardPokemonList/card-pokemon-list';

export function HomePage() {
  const { data, loading, error } = usePokemonList();

  return (
    <div>
      {!loading && !error && data && (
        <CardPokemonList pokemons={data.results} />
      )}
    </div>
  );
}
