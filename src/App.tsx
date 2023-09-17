import './App.css';
import { usePokemonList } from './api/getListPokemons';

function App() {
  const { data, loading, error } = usePokemonList();

  console.log(data);

  return <div>{!loading && !error && data && JSON.stringify(data.count)}</div>;
}

export default App;
