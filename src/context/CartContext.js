import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

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
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
