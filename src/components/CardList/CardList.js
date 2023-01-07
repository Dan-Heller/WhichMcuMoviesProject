import React from 'react';
import Card from '../Card/Card'
import './CardList.css'

const CardList = (props ) => {
  return (
    <div className='style'>
     <Card movieDetails={props.content[0]}/>
     <Card movieDetails={props.content[1]} />
     <Card movieDetails={props.content[2]}/>
     <Card movieDetails={props.content[3]}/>
    </div>
  );
}

export default CardList;