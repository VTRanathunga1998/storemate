import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  // Function to calculate the total amount
  const calculateTotalAmount = (cart) => {
    return cart.reduce((total, item) => total + item.totalAmount, 0);
  };

  const addToCart = (product) => {
    // Check if the adding product is in the cart
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Product is already in the cart, update its quantity and totalAmount
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        quantity: updatedCart[existingProductIndex].quantity + 1,
        totalAmount:
          (updatedCart[existingProductIndex].quantity + 1) *
          updatedCart[existingProductIndex].price,
      };
    } else {
      // Product is not in the cart, add it with quantity 1
      updatedCart.push({
        ...product,
        quantity: 1,
        totalAmount: product.price,
      });
    }

    setCart(updatedCart);

    // Calculate the totalAmount for the updated cart
    const updatedTotalAmount = calculateTotalAmount(updatedCart);
    setTotalAmount(updatedTotalAmount);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
    
    // Calculate the totalAmount for the updated cart
    const updatedTotalAmount = calculateTotalAmount(cart);
    setTotalAmount(updatedTotalAmount);
  };
  

  // Use useEffect to recalculate totalAmount when the cart changes
  useEffect(() => {
    const updatedTotalAmount = calculateTotalAmount(cart);
    setTotalAmount(updatedTotalAmount);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, totalAmount, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
