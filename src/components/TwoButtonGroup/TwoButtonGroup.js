import React, { useEffect, useState } from "react";
import "./TwoButtonGroup.css";

const TwoButtonGroup = ({Modes, ButtonChanged}) => {
  const [selected, setSelected] = useState(0);

  
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
      
    </div>
  );
};

export default TwoButtonGroup;
