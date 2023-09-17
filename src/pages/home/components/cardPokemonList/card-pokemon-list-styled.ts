import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 2rem;
  min-height: 80vh;
  margin-bottom: 2vh;
  & a {
    background-color: #f1f1f1;
    height: 140px;
    width: 300px;
    border: 1px solid #818181;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-decoration: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
