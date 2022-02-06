/*
 * Author: Amarjit Pheiroijam
 * OS : Zorin OS 16 Core
 * Editor : Visual Studio Code 1.64.0
 * Created Date: Saturday, February 5th 2022, 4:42:03 pm
 * Year 2022
 */
import React from "react";
import "../styles/Coin.css";
import { useHistory } from "react-router-dom";

const Coin = ({
  icon,
  coinName,
  coinSymbol,
  price,
  marketCap,
  priceChange,
  id,
  index
}) => {
  let history = useHistory();
  return (
    <div className="coinContainer">
      <div className="coinRow">
        <div className="coinData">
          <div className="coin">
            {/*eslint-disable-next-line*/}
            <img src={icon} alt={`Default Image-${index}`}/>
            <h1 className="coinName">{coinName}</h1>
            <p className="coinSymbol">{coinSymbol}</p>
            <p className="coinPrice">₹{price.toFixed(2)}</p>
            {priceChange < 0 ? ( <p className="priceChange red">{priceChange.toFixed(2)}%</p>) 
            : (<p className="priceChange green">+{priceChange.toFixed(2)}%</p>)}
            <p className="coinVolume">₹{marketCap.toLocaleString()}</p>
            <button onClick={() => {
                history.push(`/CoinPage/${id}`);
              }}> More Info 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
