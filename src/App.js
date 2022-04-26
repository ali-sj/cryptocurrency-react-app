import { useState, useEffect } from "react";
import coinAxios from "./axios/coinAxios";
import "./App.css";
import axios from "axios";
import ContentCoin from "./components/ContentCoin";
import Input from "./components/Input";
function App() {
  const [coins, setCoins] = useState({ loading: true, listCoins: [] });
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins({ loading: false, listCoins: res.data });
      })
      .then(() => {
        console.log(coins);
      });
  }, [search]);


  return (
    <>
      <div className="search">
        <h1>search your coin</h1>
        <Input className='input-search' placeholder='search' onChange={(e)=>{setSearch(e.target.value)}}/>
      </div>
      {coins.loading?<p className="loading">Loading...</p>:<ContentCoin coins={coins} search={search}/>
}
      
    </>
  );
}

export default App
