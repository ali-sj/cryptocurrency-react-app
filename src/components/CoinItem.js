import React from 'react'

const CoinItem = ({coin}) => {
    
    const{image,name,symbol,total_volume,price_change_percentage_24h,market_cap,current_price}=coin
  return (
      <>
          <div className='row mx- mt-5'>
          <div className='col col-md-2 text-center mb-3 '><img style={{width:'5rem',height:'5rem'}} src={image}/></div>

        <div className='col col-md-2 text-center'>{name}</div>
        <div className='col col-md-2 text-center'>{symbol.toLocaleUpperCase()}</div>
        <div className='col col-md-1 text-center'>${current_price}</div>
        <div className='col col-md-2 text-center'>{total_volume}</div>
        <div className='col col-md-1 text-center'>{price_change_percentage_24h>0?<p className='green-price'>{price_change_percentage_24h.toFixed(2)}</p>:<p className='red-price'>{price_change_percentage_24h.toFixed(2)}</p>}</div>
        <div className='col col-md-1 text-center'>{market_cap}</div>
    </div>

      </>

  )
}

export default CoinItem
