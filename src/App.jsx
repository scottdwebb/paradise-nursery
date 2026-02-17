// ⚛️ src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<LandingPage />}
        />
        <Route
          path='/products'
          element={<ProductList />}
        />
        <Route
          path='/cart'
          element={<ShoppingCart />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
