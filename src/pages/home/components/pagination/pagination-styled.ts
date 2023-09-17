import styled from 'styled-components';

export const Container = styled.nav`
  text-align: center;
  margin-top: 20px;

  & ul {
    display: flex;
    justify-content: center;
    list-style: none;
    margin-bottom: 5rem;
  }
  & a {
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f4f4f4;
    color: #333;
    margin: 5px;
    transition: background-color 0.3s ease;
    text-decoration: none;
  }
`;
