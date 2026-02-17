// 📦 src/pages/ProductList.jsx
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { addItem, selectCartItems } from '../store/cartSlice';
import plantsData from '../data/plantsData';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [addedToCart, setAddedToCart] = useState({});

  useEffect(() => {
    const added = {};
    cartItems.forEach((item) => {
      added[item.name] = true;
    });
    setAddedToCart(added);
  }, [cartItems]);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant)); // cartSlice will create or increment
  };

  useEffect(() => {
    document.title = 'Paradise Nursery | Plants';
  }, []);

  return (
    <>
      <Header />
      <div className='products-page'>
        <h1 className='page-title'>Shop Our Collection</h1>

        {plantsData.map((category, categoryIndex) => (
          <section
            key={categoryIndex}
            className='category-section'>
            <h2 className='category-title'>{category.category}</h2>
            <div className='product-grid'>
              {category.plants.map((plant, plantIndex) => (
                <ProductCard
                  key={plantIndex}
                  plant={plant}
                  onAddToCart={handleAddToCart}
                  isAdded={!!addedToCart[plant.name]}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

export default ProductList;
