import React from 'react';
import './Card.css'

const Card = (props) => {
  return (
    <div className='tc grow  br3 pa3 ma2 di bw2 shadow-5 CardSize'>
      <img  alt='posterimage' src={props.movieDetails.url} />
      <div>
        <h3>{props.movieDetails.name}</h3>
        
      </div>
    </div>
  );
}

export default Card;