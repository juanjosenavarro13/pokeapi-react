import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 2rem;
  min-height: 80vh;
  margin-bottom: 2vh;
  & a {
    height: 140px;
    width: 300px;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-decoration: none;
    & img {
      height: 97px;
      width: 97px;
    }
    & h2 {
      font-family: 'pokemon_hollownormal';
      font-size: 1.85rem;
    }
  }
  & a:hover {
    & h2 {
      font-family: 'pokemon_solidnormal';
    }
  }
`;
