import { usePokemonList } from '@/api/getListPokemons';
import { useEffect, useState } from 'react';
import { CardPokemonList, Pagination } from './components';
import { useParams } from 'react-router-dom';

export function HomePage() {
  const { pageNumber } = useParams();
  const [page, setPage] = useState<number>(Number(pageNumber));
  const { data, loading, error } = usePokemonList(page);

  useEffect(() => {
    setPage(Number(pageNumber) || 1);
  }, [pageNumber]);

  return (
    <div>
      {!loading && !error && data && (
        <>
          <CardPokemonList pokemons={data.results} />
          <Pagination actualPage={page} totalPages={data.totalPages} />
        </>
      )}
    </div>
  );
}
