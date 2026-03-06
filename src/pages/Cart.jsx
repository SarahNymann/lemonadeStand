import { useSelector } from "react-redux";

export default function Cart() {

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.idDrink}>
            <h3>{item.strDrink}</h3>
            <img src={item.strDrinkThumb} alt={item.strDrink} width="150" />
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
}