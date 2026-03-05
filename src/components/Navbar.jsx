import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/lemonadeStand">Home</Link> |{" "}
      <Link to="/lemonadeStand/shop">Shop</Link> |{" "}
      <Link to="/lemonadeStand/cart">Cart</Link>
    </nav>
  );
}