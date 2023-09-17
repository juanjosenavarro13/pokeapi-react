import { usePokemonList } from '@/api/getListPokemons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardPokemonList, Container, Pagination } from './components';
import { validatePage } from './validate-page';

export function HomePage() {
  const limit = 25;
  const { pageNumber } = useParams();
  const [page, setPage] = useState<number>(1);
  const { data, error } = usePokemonList(page, limit);

  useEffect(() => {
    if (!isNaN(Number(pageNumber))) {
      setPage(validatePage(Number(pageNumber), data.totalPages));
    }
  }, [pageNumber, data.totalPages]);

  return (
    <>
      <Container>
        {!error && data && <CardPokemonList pokemons={data.results} />}
      </Container>
      <Pagination actualPage={page} totalPages={data.totalPages} />
    </>
  );
}
