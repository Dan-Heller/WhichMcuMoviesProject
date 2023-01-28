import React from 'react';
import './Card.css'

const Card = ({url, name, TitleClicked,Index}) => {
  return (
    <div className='tc grow  br3 pa3 ma2 di bw2 shadow-5 CardSize'  >
      <img  alt='posterimage' src={(url)} onClick={() => TitleClicked(Index)} />
      
      <div>
        <h3>{name}</h3>
        
      </div>
    </div>
  );
}

export default Card;