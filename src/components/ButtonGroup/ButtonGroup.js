import React, { useEffect, useState } from "react";
import "./ButtonGroup.css";

const ButtonGroup = ({Modes, ButtonChanged}) => {
  const [selected, setSelected] = useState(2);

  
  const handleClick = (value) => {
    if(selected != value){
        setSelected(value);
        ButtonChanged(value);
    }
   
  };

  return (
    <div className="button-group">
      <button
       
        className={selected === 0 ? "selected" : "notSelected"}
        onClick={() => handleClick(0)}
      >
        {Modes[0]}
      </button>
      <button
      
        className={selected === 1 ? "selected" : "notSelected"}
        onClick={() => handleClick(1)}
      >
         {Modes[1]}
      </button>
      <button
       
        className={selected === 2 ? "selected" : "notSelected"}
        onClick={() => handleClick(2)}
      >
        {Modes[2]}
      </button>
    </div>
  );
};

export default ButtonGroup;
