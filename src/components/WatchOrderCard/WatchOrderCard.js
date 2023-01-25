import React from 'react';
import './WatchOrderCard.css'
import Card from '../Card/Card';




const WatchOrderCard = ({url, name, index, isTarget}) => {
   let className = isTarget ? "watchOrderCard pa3 ma2 Border blink-border" : "watchOrderCard pa3 ma2";
    

  return (
    <div className={className}>
        <h2 className='titleIndex'>{index+1}.</h2>
        <Card
            url={url}
            name={name} 
        />
    </div>
  );
}

export default WatchOrderCard;