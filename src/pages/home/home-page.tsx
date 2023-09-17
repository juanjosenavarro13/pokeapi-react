import { usePokemonList } from '@/api/getListPokemons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardPokemonList, Container, Pagination } from './components';

export function HomePage() {
  const limit = 25;
  const { pageNumber } = useParams();
  const [page, setPage] = useState<number>(Number(pageNumber));
  const { data, error } = usePokemonList(page, limit);

  useEffect(() => {
    setPage(Number(pageNumber) || 1);
  }, [pageNumber]);

  return (
    <>
      <Container>
        {!error && data && <CardPokemonList pokemons={data.results} />}
      </Container>
      <Pagination actualPage={page} totalPages={data.totalPages} />
    </>
  );
}
