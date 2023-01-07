import React from 'react';
import CardList from '../CardList/CardList';
import './ContentBrowse.css'

const ContentBrowse = (props ) => {
  return (
    <div className='tc   br3 pa3 ma2 dib bw2 shadow-5 '>
        <div className='SearchBar'>
        <input className='f4 pa2 w-30 right' type='text' ></input>
        </div>
        <CardList content={props.content} />
    </div>
  );
}

export default ContentBrowse;