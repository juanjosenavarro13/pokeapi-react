import { usePokemonDetail } from '@/api/getPokemonDetail';
import { useParams } from 'react-router-dom';
import { PokemonDetailImageName } from './pokemon-detail-image-name/pokemon-detail-image-name';
import { CardPokemonDetail, Content } from './pokemon-detail-styled';

export function PokemonDetail() {
  const { id } = useParams();

  const { data, loading } = usePokemonDetail(id);

  return (
    <div>
      {!loading && data && (
        <CardPokemonDetail>
          <PokemonDetailImageName
            img={data.sprites.front_default}
            name={data.name}
            types={data.types}
          />
          <Content>contenido</Content>
        </CardPokemonDetail>
      )}
    </div>
  );
}
