import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

function TrendingCoins() {
  const [coinsData, setCoinsData] = useState([]); // No need to specify types

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const trendingCoins = response.data.coins.slice(0, 3);

        const formattedCoinsData = trendingCoins.map((coin) => ({
          symbol: coin.item.symbol.toUpperCase(),
          name: coin.item.name,
          img: coin.item.large,
          changePercentage: coin.item.data.price_change_percentage_24h.usd
            ? coin.item.data.price_change_percentage_24h.usd.toFixed(2)
            : "0.00", // Handle undefined percentage
        }));

        // Updating the state with the formatted data
        setCoinsData(formattedCoinsData);
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    };

    fetchCoinData();
  }, []);

  return (
    <div className="bg-white mt-4 rounded-lg py-4 px-3">
      <div className="text-2xl font-semibold text-[#0F1629]">
        Trending Coins (24h)
      </div>
      <div className="mt-4">
        {coinsData.map((coin, index) => (
          <Coin
            key={index}
            symbol={coin.symbol}
            name={coin.name}
            img={coin.img}
            changePercentage={coin.changePercentage}
          />
        ))}
      </div>
    </div>
  );
}

function Coin({ symbol, name, img, changePercentage }) {
  const isPositiveChange = parseFloat(changePercentage) >= 0; // Parse changePercentage to float

  return (
    <div className="flex my-2 text-center justify-between py-1">
      <div className="flex pt-1">
        <div>
          <img src={img} className="w-6 rounded-full" alt="Coin icon" />
        </div>
        <div className="text-[#0F1629] ml-1 ">
          {name} ({symbol})
        </div>
      </div>
      <div
        className={`w-20 flex items-center rounded-lg p-1 h-8 ${
          isPositiveChange ? "bg-green-300/20" : "bg-red-300/20"
        }`}
      >
        <svg
          viewBox="0 0 100 100"
          className={`w-3 fill-current ${
            isPositiveChange ? "text-green-600" : "text-red-600"
          }`}
          style={{ transform: isPositiveChange ? "" : "rotate(180deg)" }}
        >
          <polygon points="0,100 50,0 100,100" />
        </svg>
        <span
          className={`ml-2 text-sm font-medium ${
            isPositiveChange ? "text-green-600" : "text-red-600"
          }`}
        >
          {Math.abs(changePercentage)}%
        </span>
      </div>
    </div>
  );
}


// PropTypes validation
Coin.propTypes = {
    symbol: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    changePercentage: PropTypes.string.isRequired, // Must be a string representing a number
  };
  
  export default TrendingCoins;
