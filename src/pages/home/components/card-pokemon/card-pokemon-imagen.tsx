import { useCallback, useEffect, useState } from 'react';

interface Props {
  front: string;
  showFront: boolean;
  back?: string;
}
export function CardPokemonImage(props: Props) {
  const { front, back, showFront } = props;

  const validateImage = useCallback(() => {
    if (showFront && front === null) return false;
    if (!showFront && back === null) return false;
    return true;
  }, [back, front, showFront]);

  const [error, setError] = useState(validateImage());

  const handleImageError = () => {
    setError(true);
  };

  useEffect(() => {
    setError(validateImage());
  }, [showFront, validateImage]);

  return error ? (
    <img
      onError={handleImageError}
      loading="lazy"
      src={showFront ? front : back}
      alt={showFront ? front : back}
    />
  ) : (
    <div style={{ height: '97px', width: '97px' }}></div>
  );
}
