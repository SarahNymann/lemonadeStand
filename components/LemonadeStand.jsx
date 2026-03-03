import { useState } from "react";

function LemonadeStand () {
    const [profit, setProfit] = useState(0);

    const sellLemonade = () => {
        setProfit(profit + 5); // Each lemonade sold adds $5 to profit

    };

    const buyLemons = () => {
        setProfit(profit - 2); // Buying lemons costs $2
    };


    return (
    <div>
        <h2>Total Profit: ${profit}</h2>

        <button onClick={sellLemonade}>Sell Lemonade $5</button>
        <button onClick={buyLemons}>Buy Lemons $2</button>
    </div>
    );
}

export default LemonadeStand;