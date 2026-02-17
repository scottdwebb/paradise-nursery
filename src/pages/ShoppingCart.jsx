// 🛍️ src/pages/ShoppingCart.jsx

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import {
  selectCartItems,
  selectCartTotalItems,
  selectCartTotalCost,
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from '../store/cartSlice';

function ShoppingCart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const totalItems = useSelector(selectCartTotalItems);
  const totalCost = useSelector(selectCartTotalCost);

  const handleIncrement = (plantName) => {
    dispatch(incrementQuantity(plantName));
  };

  const handleDecrement = (plantName) => {
    dispatch(decrementQuantity(plantName));
  };

  const handleRemove = (plantName) => {
    dispatch(removeItem(plantName));
  };

  const handleCheckout = () => {
    alert(
      `Thank you for your purchase!\n\nTotal Items: ${totalItems}\nTotal Cost: $${totalCost.toFixed(
        2,
      )}\n\nYour plants will be delivered soon! 🌿`,
    );
  };

  useEffect(() => {
    document.title = 'Paradise Nursery | Cart';
  }, []);

  return (
    <>
      <Header />
      <div className='cart-page'>
        <h1 className='page-title'>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className='cart-empty'>
            <div className='cart-empty-icon'>🛒</div>
            <p className='cart-empty-text'>Your cart is empty</p>
            <button
              className='btn'
              onClick={() => navigate('/products')}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className='cart-content'>
            <div className='cart-items'>
              {cartItems.map((item) => (
                <CartItem
                  key={item.name}
                  item={item}
                  onIncrement={handleIncrement}
                  onDecrement={handleDecrement}
                  onRemove={handleRemove}
                />
              ))}
            </div>

            <CartSummary
              totalItems={totalItems}
              totalCost={totalCost}
              onCheckout={handleCheckout}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default ShoppingCart;
