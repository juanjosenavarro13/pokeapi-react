import { Types } from '@/api/types/getPokemonDetail';
import { ColorName } from '@/pages/home/components';
import { ImageAndName } from '../pokemon-detail-styled';
interface Props {
  img: string;
  name: string;
  types: Types[];
}

export function PokemonDetailImageName(props: Props) {
  const { img, name, types } = props;
  return (
    <ImageAndName>
      <img src={img} alt={name} width={150} height={150} />
      <ColorName $inputColor={types[0].type.name}>{name}</ColorName>
      <sub>
        {types.map((type) => {
          return <small key={type.type.name}>{type.type.name} </small>;
        })}
      </sub>
    </ImageAndName>
  );
}
