import styled from 'styled-components';

export const CardPokemonDetail = styled.div`
  min-width: 300px;
  max-width: 75%;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px;
  margin: 20px auto;
  display: flex;
`;

export const ImageAndName = styled.section`
  max-width: 50%;
  width: 35%;
  align-items: start;
`;
export const Content = styled.section`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
