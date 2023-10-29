
import ProductLeftCSS from "./ProductLeft.module.css";
import { useCart } from "../../../context/CartContext";

const ProductLeft = () => {
  const { cart , removeFromCart } = useCart();

  return (
    <div className={ProductLeftCSS["product-left-container"]}>
      <div className={ProductLeftCSS["product-selection"]}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "10px 0",
          }}
        >
          <select id="mySelect" class={ProductLeftCSS["custom-select"]}>
            <option value="apple">Please Select</option>
          </select>
          <select id="mySelect" class={ProductLeftCSS["custom-select"]}>
            <option value="apple">Please Select</option>
          </select>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "10px 0",
          }}
        >
          <select id="mySelect" class={ProductLeftCSS["custom-select"]}>
            <option value="apple">Please Select</option>
          </select>
          <select id="mySelect" class={ProductLeftCSS["custom-select"]}>
            <option value="apple">Please Select</option>
          </select>
        </div>
      </div>
      <div className="selected-item">
        <table>
          <thead>
            <tr>
              <td>#</td>
              <td>Name</td>
              <td>Price</td>
              <td>Qty</td>
              <td>Total</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {cart && cart.length > 0 ? (
              cart.map((cartProduct, key) => (
                <tr key={key}>
                  <td>{cartProduct.id}</td>
                  <td>{cartProduct.name}</td>
                  <td>{cartProduct.price}</td>
                  <td>{cartProduct.quantity}</td>
                  <td>{cartProduct.totalAmount}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(cartProduct.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No Item in Cart</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductLeft;
