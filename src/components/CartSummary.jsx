// 📝 src/components/CartSummary.jsx

import { Link } from 'react-router-dom';

function CartSummary({ totalItems, totalCost, onCheckout }) {
  return (
    <aside className='cart-summary'>
      <h2 className='summary-title'>Order Summary</h2>

      <div className='summary-row'>
        <span className='summary-label'>Total Items:</span>
        <span className='summary-value'>{totalItems}</span>
      </div>

      <div className='summary-row'>
        <span className='summary-label'>Subtotal:</span>
        <span className='summary-value'>${totalCost.toFixed(2)}</span>
      </div>

      <div className='summary-row'>
        <span className='summary-label'>Shipping:</span>
        <span className='summary-value'>FREE</span>
      </div>

      <div className='summary-row'>
        <span className='summary-label'>Total:</span>
        <span className='summary-total'>${totalCost.toFixed(2)}</span>
      </div>

      <button
        className='checkout-btn'
        onClick={onCheckout}>
        Proceed to Checkout
      </button>

      <Link
        to='/products'
        className='continue-shopping'>
        ← Continue Shopping
      </Link>
    </aside>
  );
}

export default CartSummary;
