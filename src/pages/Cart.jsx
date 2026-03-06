import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalItem = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <div>
      <h1>Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.idDrink}>
              <h3>{item.strDrink}</h3>

              <img src={item.strDrinkThumb} alt={item.strDrink} width="150" />

              <p>Quantity: {item.quantity}</p>

              <button onClick={() => dispatch(decreaseQuantity(item.idDrink))}>
                -
              </button>

              <button onClick={() => dispatch(increaseQuantity(item.idDrink))}>
                +
              </button>

              <button onClick={() => dispatch(removeFromCart(item.idDrink))}>
                Remove
              </button>
            </div>
          ))}

          <h3>Checkout</h3>

          {cartItems.map((item) => (
            <p key={item.idDrink}>
              {item.strDrink} x {item.quantity}
            </p>
          ))}

          <p>Total items: {totalItem}</p>
        </>
      )}
    </div>
  );
}