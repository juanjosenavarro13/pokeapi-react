import { usePokemonDetail } from '@/api/getPokemonDetail';
import { useNavigate, useParams } from 'react-router-dom';
import { PokemonDetailImageName } from './pokemon-detail-image-name/pokemon-detail-image-name';
import {
  ButtonBack,
  CardPokemonDetail,
  Content,
} from './pokemon-detail-styled';

export function PokemonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
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
          <Content>asdasd</Content>
          <ButtonBack onClick={() => navigate(-1)}>volver</ButtonBack>
        </CardPokemonDetail>
      )}
    </div>
  );
}
