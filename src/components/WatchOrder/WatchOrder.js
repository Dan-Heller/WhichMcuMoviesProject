//import React from 'react';
import React, { useState, useEffect } from 'react';
import WatchOrderCard from '../WatchOrderCard/WatchOrderCard';
import './WatchOrder.css'
import { useRef } from 'react'
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import * as TitlesService from '../../Services/TitlesService';
import * as CharactersService from '../../Services/CharactersService';

  
const WatchOrderModes = ["All", "Main Hero's Titles", "Main Hero appearing"];


const WatchOrder = ({chosenInd,searchByMode,searchByModes}) => {
  let isTargetTitle = false;
  const [watchOrderMode, setMode] = useState(WatchOrderModes[2]);
  const [fetchedTitles, setfetchedTitles] = useState([]);
  const prevChosenTitle = useRef(chosenInd);
  const prevChosenMode = useRef(watchOrderMode);
  

 

  const changeWatchOrderMode = (mode) => {
      setMode(WatchOrderModes[mode]);
  
      console.log("mode now is:" , mode)
  }

  const fetchTitles = (chosenTitleInd) => {
    fetch(`http://localhost:3001/AllTitlesToSelectedByMode?titleind=${chosenTitleInd}&mode=${watchOrderMode}`)
    .then(res => res.json())
    .then(data => {
      setfetchedTitles(data);
    })
    .catch(err => {
      console.log(err);
      
    });
  }

  useEffect( () => {
    
    if(!chosenInd){
      fetchTitles(" "); //fetch all titles to watch order
      return;
    }
    let chosenTitleInd = chosenInd; 

    const fetchAllTitlesToSelectedByModeFromService = async () => {
      const data = await TitlesService.fetchAllTitlesToSelectedByMode(chosenTitleInd,watchOrderMode);
      setfetchedTitles(data);
    };
    const fetchAppearingTitlesOfCharacterFromService = async () => {
      const data = await TitlesService.fetchAppearingTitlesOfCharacter(chosenTitleInd);
      setfetchedTitles(data);
    };
    const fetchMainTitlesOfCharacterFromService = async () => {
      const data = await TitlesService.fetchMainTitlesOfCharacter(chosenTitleInd);
      setfetchedTitles(data);
    };
    const fetchLatestCharacterTitleFromService = async () => {
      const data = await TitlesService.GetLatestCharacterTitle(chosenTitleInd);
      chosenTitleInd = data[0].ind;
      fetchAllTitlesToSelectedByModeFromService();
    };

      //get latest movie ind of character
        let data;
        if(searchByMode == searchByModes[1] ){  // by character
          
          if(watchOrderMode === WatchOrderModes[0])//ALL
          {
            fetchLatestCharacterTitleFromService();
          }
          else if(watchOrderMode === WatchOrderModes[1]){
            fetchMainTitlesOfCharacterFromService();
          }
          else{
            fetchAppearingTitlesOfCharacterFromService();
          }
        }
        else{
         fetchAllTitlesToSelectedByModeFromService();
        }
    },[watchOrderMode,chosenInd]);
 

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