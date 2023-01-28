import React from 'react';
import './Card.css'

const Card = ({url, name}) => {
  return (
    <div className='tc grow  br3 pa3 ma2 di bw2 shadow-5 CardSize'>
      <img  alt='posterimage' src={(url)} />
      
      <div>
        <h3>{name}</h3>
        
      </div>
    </div>
  );
}

export default Card;