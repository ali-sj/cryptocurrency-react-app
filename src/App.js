import { useState, useEffect } from "react";
import coinAxios from "./axios/coinAxios";
import "./App.css";
import axios from "axios";
import CoinItem from "./components/CoinItem";

function App() {
  const [conis, setCoins] = useState({ loading: true, listCoins: [] });
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
        console.log(conis);
      });
  }, [search]);
  const filteredConis = conis.listCoins.filter((coin) => {
    return coin.name.toLocaleLowerCase().includes(search.trim());
  });
let content
if(conis.listCoins.length===0 & conis.loading ){
  content=<p className="loading"> loading</p>
}else if(filteredConis.length===0 & !conis.loading){
  content=<p className="empty">not matched any coin!</p>
}else{
  content=<div className="container-fluid">
    {filteredConis.map(coin=>(<CoinItem coin={coin}/>))}
  </div>
}
  return (
    <>
      <div className="search">
        <h1>search your coin</h1>
        <form>
          <input
            className="input-search"
            placeholder="search..."
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </form>
      </div>
      {content}
    </>
  );
}

export default App
