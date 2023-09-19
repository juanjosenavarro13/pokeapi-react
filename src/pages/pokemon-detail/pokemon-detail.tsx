import { usePokemonDetail } from '@/api/getPokemonDetail';
import { useParams } from 'react-router-dom';
import {
  CardPokemonDetail,
  Content,
  ImageAndName,
} from './pokemon-detail-styled';
import { ColorName } from '../home/components';

export function PokemonDetail() {
  const { id } = useParams();

  const { data, loading } = usePokemonDetail(id);

  return (
    <div>
      {!loading && data && (
        <CardPokemonDetail>
          <ImageAndName>
            <img
              src={data.sprites.front_default}
              alt={data.name}
              width={150}
              height={150}
            />
            <ColorName $inputColor={data.types[0].type.name}>
              {data.name}
            </ColorName>
            <sub>
              {data.types.map((type) => {
                return <>{type.type.name} </>;
              })}
            </sub>
          </ImageAndName>
          <Content>otro</Content>
        </CardPokemonDetail>
      )}
    </div>
  );
}
