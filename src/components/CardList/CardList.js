import React from 'react';
import Card from '../Card/Card'
import './CardList.css'
import chevronLeft from './chevronLeft.png';
import chevronRight from './chevronRight.png';


const CardList = ({titlesProp} ) => {
  const cardsContainerRef = React.createRef();
  const handleRightClick = (event) => {
    cardsContainerRef.current.scrollTo({
      left: cardsContainerRef.current.scrollLeft + 400,
      behavior: 'smooth'
    })
  console.log("right right right");
  }
  const handleLeftClick = (event) => {
    cardsContainerRef.current.scrollTo({
      left: cardsContainerRef.current.scrollLeft - 400,
      behavior: 'smooth'
    })
  console.log("left");
  }

  return (
    <div className='style'>

          <div className="left-arrow grow " onClick={handleLeftClick}  >
          <img src={chevronLeft} alt="Left Arrow" className='arrowImg'/>
          </div>
      
      <div className='cards'  ref={cardsContainerRef}>
      {
        titlesProp.map((title, i) => {
          return(
            <Card
            url={titlesProp[i].poster_url}
            name={titlesProp[i].name} 
            />
          );
        })
      }
      </div>

      <div className="right-arrow grow "  onClick={handleRightClick} >
            <img src={chevronRight} alt="Right Arrow" className='arrowImg' />
          </div>     
          
     
                
    </div>
  );
}

export default CardList;