import React from 'react';
import Card from '../Card/Card'
import './CardList.css'


const CardList = ({titlesProp} ) => {
  return (
    <div className='style'>

    
      <div className='cards'>
      {
        titlesProp.map((title, i) => {
          return(
            <Card
            url={titlesProp[i].url}
            name={titlesProp[i].name} 
            />
          );
        })
      }
      </div>
    
                
    </div>
  );
}

export default CardList;