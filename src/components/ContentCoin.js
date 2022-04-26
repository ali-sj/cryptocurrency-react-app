import React from 'react'
import CoinItem from './CoinItem';

const ContentCoin = ({coins,search}) => {
    
    const filteredConis = coins.listCoins.filter((coin) => {
        return coin.name.toLocaleLowerCase().includes(search.trim());
      });
      
  return (
    <>
    {filteredConis.length===0?<p className='empty'>not matched any coin!</p>:
    <div className="container-fluid">
      {filteredConis.map(coin=>(<CoinItem coin={coin}/>))}
    </div>
    
    }

      
    </>
  )
}

export default ContentCoin
