import styled from 'styled-components';

export const CardPokemonDetail = styled.div`
  min-width: 300px;
  max-width: 75%;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  justify-content: center;
  padding: 20px;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
`;

export const ImageAndName = styled.section`
  width: 35%;
  align-items: start;
`;
export const Content = styled.section`
  display: flex;
  width: 65%;
  justify-content: flex-end;
`;

export const ButtonBack = styled.button`
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f4f4f4;
  color: #333;
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
`;
