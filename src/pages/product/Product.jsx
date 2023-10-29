import "./Product.module.css";
import ProductLeft from "./productLeft/ProductLeft";
import ProductRight from "./productRight/ProductRight";

const Product = () => {
  return (
    <section>
      <ProductLeft />
      <ProductRight />
    </section>
  );
};

export default Product;
