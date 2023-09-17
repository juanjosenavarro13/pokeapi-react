import { usePokemonList } from './api/getListPokemons';
import { CardPokemonList } from './components/cardPokemonList/card-pokemon-list';

function App() {
  const { data, loading, error } = usePokemonList();

  return (
    <div>
      {!loading && !error && data && (
        <CardPokemonList pokemons={data.results} />
      )}
    </div>
  );
}

export default App;
