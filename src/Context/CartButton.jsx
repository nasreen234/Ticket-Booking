import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const CartButton = () => {
  const { cartItems } = useContext(CartContext);

  // Total items count
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link to="/cart" className="btn btn-outline-dark position-relative ms-3 text-white mt-4 py-1 mb-4">
         Go to Cart
      {totalItems > 0 && (
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning"
        >
          {totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartButton;
