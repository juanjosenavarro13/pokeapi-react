import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 100vh;
  gap: 2rem;
  & div {
    min-width: 300px;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    & h2 {
      font-family: 'pokemon_hollownormal';
      font-size: 2rem;
    }
  }
  & div:hover {
    & h2 {
      font-family: 'pokemon_solidnormal';
    }
  }
`;
