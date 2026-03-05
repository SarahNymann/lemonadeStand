import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Welcome to the Lemonade Stand!</h1>

        <Routes>
          <Route path="/lemonadeStand" element={<Home />} />
          <Route path="/lemonadeStand/shop" element={<Shop />} />
          <Route path="/lemonadeStand/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}