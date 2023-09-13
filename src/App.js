import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DetailsPage from './components/detailsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:index" element={<DetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
