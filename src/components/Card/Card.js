import React from 'react';
import './Card.css'

const Card = ( ) => {
  return (
    <div className='tc grow  br3 pa3 ma2 di bw2 shadow-5 CardSize'>
      <img  alt='posterimage' src={`https://m.media-amazon.com/images/I/71ewZLJcGVL._AC_SL1101_.jpg`} />
      <div>
        <h3>"Thor Ragnarok"</h3>
        
      </div>
    </div>
  );
}

export default Card;