import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  addToCart,
} from "./cartSlice";

function Cart() {
  const { items, totalPrice, totalQuantity } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>

      <p>Total Items: {totalQuantity}</p>
      <p>Total Price: ₹{totalPrice}</p>

      {items.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>Quantity: {item.quantity}</p>
          <p>Total: ₹{item.totalPrice}</p>

          <button onClick={() => dispatch(addToCart(item))}>
            +
          </button>

          <button
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            -
          </button>
        </div>
      ))}

      <button onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;
