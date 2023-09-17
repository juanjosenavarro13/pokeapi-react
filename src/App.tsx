import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
import { HomePage, NotFoundPage, PokemonDetail } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/:pageNumber?" element={<HomePage />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
