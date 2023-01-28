//import React from 'react';
import React, { useState, useEffect } from 'react';
import WatchOrderCard from '../WatchOrderCard/WatchOrderCard';
import './WatchOrder.css'
import { useRef } from 'react'


/*class movie {
    constructor(name, url) {
      this.name = name;
      this.url = url;
      
    }
  }*/


 
    /*const movie1 = new movie("Doctor Strange in the Multiverse of Madness",'https://m.media-amazon.com/images/I/913v0sAkiyL._AC_UY218_.jpg');
    const movie2 = new movie("Avengers",'https://m.media-amazon.com/images/I/81lMrc8bBRL._AC_UY218_.jpg');
    const movie3 = new movie("Captain America: The First Avenger",'https://m.media-amazon.com/images/I/91LmsuoBOIL._AC_UY218_.jpg');
    const movie4 = new movie("Iron Man",'https://m.media-amazon.com/images/I/91qvAndeVYL._AC_UY218_.jpg');
    const movie5 = new movie("The Incredible Hulk",'https://m.media-amazon.com/images/I/91wFHajfFpL._AC_UY218_.jpg');
    const movie6 = new movie("Iron Man 2",'https://m.media-amazon.com/images/I/91SdhGAiBKL._AC_UY218_.jpg');
    const movie7 = new movie("Captain America : The Winter Soldier",'https://m.media-amazon.com/images/I/91cW92vUDoL._AC_UY218_.jpg');
    const movie8 = new movie("Thor : The Dark World",'https://m.media-amazon.com/images/I/91RsJltFGLL._AC_UY218_.jpg');
    const movie9 = new movie("Thor : Ragnarok",'https://m.media-amazon.com/images/I/81l1Kaw8aKL._AC_UY218_.jpg');*/
    //const fetchedTitles =  [movie1, movie2, movie3, movie4,movie5,movie6,movie7,movie8, movie9];
    
  


const WatchOrder = ({chosenTitle}) => {
  let isTargetTitle = false;
  const [fetchedTitles, setfetchedTitles] = useState([]);
  //console.log("why?");
  const prevChosenTitle = useRef(chosenTitle);


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