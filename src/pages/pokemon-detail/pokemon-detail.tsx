import { usePokemonDetail } from '@/api/getPokemonDetail';
import { useParams } from 'react-router-dom';

export function PokemonDetail() {
  const { id } = useParams();

  const { data, loading } = usePokemonDetail(id);

  return <div>{!loading && data && JSON.stringify(data)}</div>;
}
