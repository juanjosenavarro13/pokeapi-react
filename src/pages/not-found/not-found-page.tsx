import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #777;
`;

const BackButton = styled(Link)`
  background-color: black;
  color: #fff;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: 0.5s;
  margin-top: 2rem;

  &:hover {
    background-color: #ccc;
    color: black;
  }
`;

export function NotFoundPage() {
  return (
    <Container>
      <Title>404 - Página no encontrada</Title>
      <Description>Lo sentimos, la página que buscas no existe.</Description>
      <BackButton to={'/'}>Ir al inicio</BackButton>
    </Container>
  );
}
