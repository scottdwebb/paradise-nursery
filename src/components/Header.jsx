// 🧩 src/components/Header.jsx

import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartTotalItems } from '../store/cartSlice';

function Header() {
  const navigate = useNavigate();
  const totalItems = useSelector(selectCartTotalItems);

  return (
    <header className='header'>
      <div className='header-content'>
        {/* Logo + name + tagline (click → landing/about) */}
        <Link
          to='/'
          className='logo'>
          <span className='logo-icon'></span>
          <div className='logo-text'>
            <span className='logo-name'>Paradise Nursery</span>
            <span className='tagline'>Where Green Meets Serenity</span>
          </div>
        </Link>

        {/* Center nav: Plants → product list */}
        <nav className='header-nav'>
          <Link
            to='/products'
            className='nav-link'>
            Plants
          </Link>
        </nav>

        {/* Right: cart icon → cart page */}
        <div className='header-right'>
          <button
            type='button'
            className='cart-icon-wrapper'
            onClick={() => navigate('/cart')}
            aria-label={`Shopping cart with ${totalItems} items`}>
            <span className='cart-icon'>🛒</span>
            {totalItems > 0 && <span className='cart-badge'>{totalItems}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
