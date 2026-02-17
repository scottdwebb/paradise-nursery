// 🏠 src/pages/LandingPage.jsx

import { useRef, useEffect } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import plantsData from '../data/plantsData';

function LandingPage() {
  const productsRef = useRef(null);

  const handleGetStarted = () => {
    if (productsRef.current) {
      const top = productsRef.current.offsetTop;
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    document.title = 'Paradise Nursery | About Us';
  }, []);

  return (
    <>
      {/* About Us hero, no header here */}
      <section className='landing-page'>
        <div className='landing-content'>
          <h1 className='landing-title'>Welcome to Paradise Nursery</h1>
          <p className='landing-tagline'>where green meets serenity</p>

          <p className='landing-description'>
            At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission
            is to provide a wide range of high-quality plants that not only enhance the beauty of
            your surroundings but also contribute to a healthier and more sustainable lifestyle.
            From air-purifying plants to aromatic fragrant ones, we have something for every plant
            enthusiast.
          </p>

          <p className='landing-description'>
            Our team of experts is dedicated to ensuring that each plant meets our strict standards
            of quality and care. Whether you're a seasoned gardener or just starting your green
            journey, we're here to support you every step of the way. Feel free to explore our
            collection, ask questions, and let us help you find the perfect plant for your home or
            office.
          </p>

          <p className='landing-description'>
            Join us in our mission to create a greener, healthier world. Visit Paradise Nursery
            today and experience the beauty of nature right at your doorstep.
          </p>

          <div className='landing-actions'>
            <button
              className='btn'
              onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Products section: header full-width, then inner container */}
      <section ref={productsRef}>
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
                    onAddToCart={() => {}}
                    isAdded={false}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}

export default LandingPage;
