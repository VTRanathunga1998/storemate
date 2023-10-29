import React, { useState, useEffect, useMemo } from "react";
import CardCSS from "./ProductCard.module.css";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ card }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { cart, addToCart, removeFromCart } = useCart();

  const rotateImages = () => {
    setCurrentImageIndex((currentImageIndex + 1) % card.images.length);
  };

  useEffect(() => {
    const interval = setInterval(rotateImages, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);

  // Memoize the image source to prevent unnecessary re-renders
  const imageSource = useMemo(() => {
    return `/images/${card.images[currentImageIndex]}`;
  }, [currentImageIndex, card.images]);

  return (
    <div key={card.id} className={CardCSS["card"]} onClick={() => addToCart(card)}>
      <div className={CardCSS["img-container"]}>
        <img src={imageSource} alt="Not Showing" />
      </div>
      <div>
        <span className={CardCSS["product-name"]}>{card.name}</span>
      </div>
      <div>
        <span className={CardCSS["product-code"]}>{card.code}</span>
      </div>
      <div>
        <span className={CardCSS["price"]}>{card.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
