import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../redux/cartSlice";


export default function Shop() {
  const [drinks, setDrinks] = useState([]);

  const dispath = useDispatch();

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon")
      .then((response) => response.json())
      .then((data) => {
        setDrinks(data.drinks);
      });
  }, []);

  return (
    <div>
      <h1>Lemonade Shop</h1>

      {drinks.map((drink) => (
        <div key={drink.idDrink}>
          <h3>{drink.strDrink}</h3>

          <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            width="300"
          />

          <button onClick={() => dispath(addToCart(drink))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}