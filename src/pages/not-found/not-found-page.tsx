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

export function NotFoundPage() {
  return (
    <Container>
      <Title>404 - Página no encontrada</Title>
      <Description>Lo sentimos, la página que buscas no existe.</Description>
      <BackButton to={'/'}>Ir al inicio</BackButton>
    </Container>
  );
}
