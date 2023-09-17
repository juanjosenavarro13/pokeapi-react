import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home-page';
import { Layout } from './layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
