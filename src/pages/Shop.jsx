import { useEffect, useState } from "react";

export default function Shop() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon")
      .then((response) => response.json())
      .then((data) => {
        setDrinks(data.drinks);
      });
  }, []);

  return (
    <div>
      <h2>Shop</h2>

      {drinks.map((drink) => (
        <div key={drink.idDrink}>
          <h3>{drink.strDrink}</h3>

          <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            width="300"
          />

          <button>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}