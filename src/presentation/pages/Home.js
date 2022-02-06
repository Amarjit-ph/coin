/*
 * Author: Amarjit Pheiroijam
 * OS : Zorin OS 16 Core
 * Editor : Visual Studio Code 1.64.0
 * Created Date: Saturday, February 5th 2022, 4:42:03 pm
 * Year 2022
 */

/* eslint-disable */ 
import Axios from "axios";
import { useState, useEffect } from "react";
import Coin from "../components/Coin";
import { Constants } from "../../common/constants";
import LoadingBar from 'react-top-loading-bar'
import "../styles/App.css";

function Home() {
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [progress,setProgress] = useState(0);

  useEffect(() => {
    refreshPage();
  }, []);

  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const refreshPage = () => {
    setIsLoading(true);
    setProgress(50);
    Axios.get(Constants.URL)
    .then((response) => {
      //console.log(response.data);
      setIsLoading(false);
      setCoins(response.data);
      setProgress(100);
    });
  };
  return (
    <div className="App">
      <LoadingBar color={"#0052FF"} progress={progress} onLoaderFinished={() => setProgress(0)} />
      <div className="headerContainer">
        <h1>Welcome to the Coin</h1>
        <h3>A light weight Cryptocurrency Screening Website for Developers</h3>
        <div className="quote">
          <p>“The root problem with conventional currency is all the trust that’s required to make it work. The central bank must be trusted not to debase the currency, but the history of fiat currencies is full of breaches of that trust.” <br/><b>— Satoshi Nakamoto</b></p>
        </div>
        
        
        <div className="buttonContainer">
          <input
            placeholder="Search for a Coin"
            type="text"
            onChange={handleSearch}
          />
          <button onClick={refreshPage}>Refresh</button>
        </div>
      </div>
      <div className="coinContainer">
        {filterCoins.map((coins,i) => {
          return (
            <Coin
              index={i}
              id={coins.id}
              icon={coins.image}
              coinName={coins.name}
              coinSymbol={coins.symbol}
              price={coins.current_price}
              marketCap={coins.market_cap}
              priceChange={coins.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
