import React, { useEffect } from 'react';
import { FaTimes, FaPlus, FaMinus } from 'react-icons/fa';
import CartItem from './CartItem';



const Cart = ({ isCartOpen, setIsCartOpen, cartItems, setCartItems }) => {
  console.log(cartItems);``

  const [totalprice, setTotalPrice] = React.useState(0);

  useEffect(() => {
    setTotalPrice(
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );

  }, [cartItems]);


  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleCartClick}
        >
          <div
            className="fixed right-0 top-0 h-full w-1/3 bg-white p-6 z-50 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Your Cart</h2>
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={() => setIsCartOpen(false)}
              >
                <FaTimes size={20} />
              </button>
            </div>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map((item) => (
                        <CartItem key={item.tour_package_id} item={item} cartItems={cartItems} setCartItems={setCartItems} />
                    ))}
                </ul>
            
            ) : (
              <p>Your cart is empty.</p>
            )}
            <div className="flex justify-between items-center mt-4">
              <span className="font-semibold">Total:</span>
              <span className="font-semibold">
                $
                {totalprice}
              </span>
              </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
