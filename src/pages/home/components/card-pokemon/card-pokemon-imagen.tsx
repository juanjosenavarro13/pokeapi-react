interface Props {
  front: string;
  back: string;
  showFront: boolean;
}
export function CardPokemonImage(props: Props) {
  const { front, back, showFront } = props;

  return <img src={showFront ? front : back} alt={showFront ? front : back} />;
}
