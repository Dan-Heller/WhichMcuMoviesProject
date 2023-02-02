//import React from 'react';
import React, { useState, useEffect } from 'react';
import WatchOrderCard from '../WatchOrderCard/WatchOrderCard';
import './WatchOrder.css'
import { useRef } from 'react'
import ButtonGroup from '../ButtonGroup/ButtonGroup';


  
const WatchOrderModes = ["All", "Main Hero's TItles", "Main Hero appearing"];

const WatchOrder = ({chosenTitle}) => {
  let isTargetTitle = false;
  const [watchOrderMode, setMode] = useState(WatchOrderModes[0]);
  const [fetchedTitles, setfetchedTitles] = useState([]);
  const prevChosenTitle = useRef(chosenTitle);

  const changeWatchOrderMode = (mode) => {
      setMode(WatchOrderModes[mode]);
  
      console.log("mode now is:" , mode)
  }

  useEffect(() => {
    

    if(prevChosenTitle.current !== chosenTitle){
      prevChosenTitle.current = chosenTitle;
      fetch(`http://localhost:3001/AllTitlesToSelected?name=${chosenTitle}`)
      .then(res => res.json())
      .then(data => {
       // console.log(data);
        //this.setState({ titles: data });
        setfetchedTitles(data);
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
    }
    
  })


  return (
    <div className='WatchOrderStyle    dib bw2'>
     <h1 className='Title'>Watch Order</h1>
     <div className='ButtonGroupOrderMode'>
            <ButtonGroup  Modes={WatchOrderModes} ButtonChanged={changeWatchOrderMode}/>
          </div>
     <div className='WatchOrderCardsContainer' >
         {
           fetchedTitles.map((title, i) => {
            if(i+1 === fetchedTitles.length ) //the last is the taget
            {
                isTargetTitle = true;
            }
             return(
                 <WatchOrderCard
                url={fetchedTitles[i].poster_url}
                name={fetchedTitles[i].name} 
                index={i}
                isTarget = {isTargetTitle}
                />
            );
            })
        }
    </div>
   </div>
 
  );
}

export default WatchOrder;