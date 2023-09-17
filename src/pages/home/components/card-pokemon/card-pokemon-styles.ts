import styled from 'styled-components';
import { typesColor } from './';

export const ColorName = styled.h2<{ $inputColor?: keyof typeof typesColor }>`
  color: ${(props) => {
    return typesColor[props.$inputColor ?? 'unknown'];
  }};
`;
