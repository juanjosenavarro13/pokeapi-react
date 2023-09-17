import styled from 'styled-components';
import { typesColor } from './card-pokemon-color-types';

export const ColorName = styled.h2<{ $inputColor?: keyof typeof typesColor }>`
  color: ${(props) => {
    if (props.$inputColor) return typesColor[props.$inputColor];
    return '#ccc';
  }};
`;
