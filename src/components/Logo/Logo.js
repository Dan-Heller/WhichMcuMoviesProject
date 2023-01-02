import React,{Component} from 'react';
import MarvelLogo from './MarvelLogo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div  >
       <img   src={MarvelLogo} className="App-logo" alt="logo" />
    </div>
  );
}

export default Logo;