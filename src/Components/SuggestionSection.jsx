import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

function SuggestionSection() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => {
        setCryptoData(response.data.coins);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="bg-white h-max mt-10 lg:p-14 p-8">
      <div>
        <div className="text-[#202020] text-2xl font-semibold">
          You May Also Like
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto lg:overflow-x-hidden md:flex-wrap">
          {cryptoData.slice(0, 5).map((crypto, index) => (
            <CryptoCard key={index} cryptoData={crypto.item} />
          ))}
        </div>

        <div className="text-[#202020] text-2xl font-semibold mt-6">
          Trending Coins
        </div>
        <div className="mt-4 flex gap-2 overflow-x-auto lg:overflow-x-hidden md:flex-wrap">
          {cryptoData.slice(1, 6).map((crypto, index) => (
            <CryptoCard key={index} cryptoData={crypto.item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CryptoCard({ cryptoData }) {
  if (!cryptoData) return null; 

  const { large, name, data, sparkline } = cryptoData;
  // console.log(sparkline);
  
  const priceChange = data?.price_change_percentage_24h?.usd || 0;
  const price = data?.price || "N/A";

  return (
    <div className="w-[230px] flex-none rounded-2xl p-3 border-2 my-2 mr-2 flex flex-col">
      <div className="w-full flex gap-2 items-center">
        <img
          src={large}
          alt={name}
          className="w-6 h-6 rounded-full"
        />
        <span className="text-sm">{name}</span>
        <span
          className={`rounded p-1 text-${priceChange > 0 ? "green-500" : "red-500"} ${
            priceChange > 0 ? "bg-green-100" : "bg-red-100"
          } text-xs font-normal`}
        >
          {Math.abs(priceChange.toFixed(2))}%
        </span>


      </div>
      <div className="text-xl text-[#171717] font-medium mt-2">${price.toFixed(6)}</div>
      <img
        src={sparkline || "https://www.coingecko.com/coins/33566/sparkline.svg"}
        alt={name || ""}
        className="w-full h-20"
      />
    </div>
  );
}

// PropTypes validation
CryptoCard.propTypes = {
  cryptoData: PropTypes.shape({
    large: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    data: PropTypes.shape({
      price_change_percentage_24h: PropTypes.shape({
        usd: PropTypes.number,
      }),
      price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
    sparkline: PropTypes.string,
  }).isRequired,
};

export default SuggestionSection;
