// 🌱 src/components/ProductCard.jsx

function ProductCard({ plant, onAddToCart, isAdded }) {
  const numericCost = parseFloat(
    typeof plant.cost === 'string' ? plant.cost.replace(/[^0-9.]/g, '') : plant.cost,
  );

  const handleClick = () => {
    onAddToCart({
      ...plant,
      cost: numericCost,
    });
  };

  return (
    <article className='product-card'>
      {/* sale badge */}
      <div className='product-badge'>Sale</div>

      <img
        src={plant.image}
        alt={plant.name}
        className='product-image'
      />
      <div className='product-info'>
        <h3 className='product-name'>{plant.name}</h3>
        <p className='product-description'>{plant.description}</p>
        <p className='product-price'>${numericCost.toFixed(2)}</p>
        {onAddToCart && (
          <button
            className={`product-button ${isAdded ? 'added' : ''}`}
            onClick={handleClick}
            disabled={isAdded}
            aria-label={isAdded ? `${plant.name} added to cart` : `Add ${plant.name} to cart`}>
            {isAdded ? '✓ Added to Cart' : 'Add to Cart'}
          </button>
        )}
      </div>
    </article>
  );
}

export default ProductCard;
