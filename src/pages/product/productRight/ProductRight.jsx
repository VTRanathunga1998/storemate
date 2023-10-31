import { useRef, useState } from "react";
import ProductCard from "../../../components/productCard/ProductCard";
import ProductRightCSS from "./ProductRight.module.css";
import cardData from "../../../data/data.json";
import clsx from "clsx";
import useLazyLoad from "../../../hooks/useLazyLoad";
import Skeleton from "@mui/material/Skeleton";

const NUM_PER_PAGE = 6;

const ProductRight = () => {
  const cards = cardData.cards;
  const triggerRef = useRef(null);
  const [allDataLoaded, setAllDataLoaded] = useState(false);

  const onGrabData = (currentPage) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const start = (currentPage - 1) * NUM_PER_PAGE;
        const end = start + NUM_PER_PAGE;
        const data = cards.slice(start, end);

        if (end >= cards.length) {
          setAllDataLoaded(true);
        }

        resolve(data);
      }, 3000);
    });
  };

  const { data, loading } = useLazyLoad({ triggerRef, onGrabData });

  return (
    <div className={ProductRightCSS["product-right-container"]}>
      <div className={ProductRightCSS["product-category"]}>
        <div className={ProductRightCSS["product-category-container"]}
          style={{
            
          }}
        >
          <select id="mySelect" className={ProductRightCSS["custom-select"]}>
            <option value="apple">Category</option>
          </select>
          <select id="mySelect" className={ProductRightCSS["custom-select"]}>
            <option value="apple">Brand</option>
          </select>
          <select id="mySelect" className={ProductRightCSS["custom-select"]}>
            <option value="apple">Type</option>
          </select>
        </div>
      </div>
      <div className={ProductRightCSS["product-items"]}>
        {data.map((card) => (
          <ProductCard key={card.id} card={card} />
        ))}
        <div
          ref={triggerRef}
          className={clsx("trigger", { visible: loading && !allDataLoaded })}
        >
          {!allDataLoaded && (
            <div>
              <Skeleton variant="rectangular" height={250} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductRight;
