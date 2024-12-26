import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";
import { RiCameraSwitchFill } from "react-icons/ri";


export const ToggleSwitch = () => {
    const [isOn,setOn] =useState(false);
    const handleToggleSwitch = () =>{
        setOn(!isOn);
    };
    const checkIsOn = isOn ? "on" : "off";
    const toogleBGColor = {backgroundColor : isOn ? "#4caf50" : "#f44336"}
    return (
        
   <div className="toggle-switch" onClick={handleToggleSwitch}style={toogleBGColor} > 
      <div  className={`switch ${checkIsOn}`}> 
          <span className="switch-state">{checkIsOn}</span>
          </div>
          <div className="flex space-x-4">
      <IoIosSwitch  color="green" className="icon-padding" />
      <RiCameraSwitchFill  color="blue"  className="icon-padding" />
    </div>
</div>


    );
};