import React, { useState, useEffect, useMemo, useCallback } from "react";
import CardCSS from "./ProductCard.module.css";
import { useCart } from "../../context/CartContext";

//toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ card }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();

  const notify = () => toast(card.name + " added to the cart");

  const rotateImages = useCallback(() => {
    setCurrentImageIndex((currentImageIndex + 1) % card.images.length);
  }, [currentImageIndex, card.images]);

  useEffect(() => {
    const interval = setInterval(rotateImages, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [rotateImages]);

  const imageSource = useMemo(() => {
    return `/images/${card.images[currentImageIndex]}`;
  }, [currentImageIndex, card.images]);

  return (
    <div>
      <div
        key={card.id}
        className={CardCSS["card"]}
        onClick={() => {
          addToCart(card);
          notify();
        }}
      >
        <div className={CardCSS["img-container"]}>
          <img src={imageSource} alt="Not Showing" />
        </div>
        <div>
          <span className={CardCSS["product-name"]}>{card.name}</span>
        </div>
        <div>
          <span className={CardCSS["product-code"]}>{card.category}</span>
        </div>
        <div>
          <span className={CardCSS["price"]}>{card.price} LKR</span>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ProductCard;
