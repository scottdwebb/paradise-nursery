// 🛒 src/components/CartItem.jsx

function CartItem({ item, onIncrement, onDecrement, onRemove }) {
  return (
    <article className='cart-item'>
      <img
        src={item.image}
        alt={item.name}
        className='cart-item-image'
      />
      <div className='cart-item-details'>
        <h3 className='cart-item-name'>{item.name}</h3>
        <p className='cart-item-description'>{item.description}</p>
        <div className='cart-item-actions'>
          <div className='quantity-controls'>
            <button
              className='quantity-btn'
              onClick={() => onDecrement(item.name)}
              aria-label='Decrease quantity'>
              −
            </button>
            <span className='quantity-display'>{item.quantity}</span>
            <button
              className='quantity-btn'
              onClick={() => onIncrement(item.name)}
              aria-label='Increase quantity'>
              +
            </button>
          </div>
          <div className='cart-item-price'>
            <span className='unit-price'>${item.cost} each</span>
            <span className='subtotal'>${(item.cost * item.quantity).toFixed(2)}</span>
          </div>
          <button
            className='delete-btn'
            onClick={() => onRemove(item.name)}
            aria-label={`Remove ${item.name} from cart`}>
            🗑️ Remove
          </button>
        </div>
      </div>
    </article>
  );
}

export default CartItem;
