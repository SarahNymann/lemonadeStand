import { useDispatch, useSelector  } from "react-redux";
import { sellLemonade, buyLemons } from "../redux/profitSlice";


function LemonadeStand () {
    const dispatch = useDispatch(); // Hook for at få adgang til dispatch funktionen

    const profit = useSelector((state) => state.profit.value); // Hook for at få adgang til profit værdien fra state

    return (
        <div>
            <h2>Total Profit: ${profit}</h2>

            <button onClick={() => dispatch(sellLemonade())}>
                Sell Lemonade $5
            </button>

            <button onClick={() => dispatch(buyLemons())}>
                Buy Lemons $2
            </button>
        </div>
    );
}

export default LemonadeStand;