import React from "react";


const scaleNames={
    c:"celcius",
    f:"farenhite",
    }

export default function TemparetureInput({scale,tempareture,onTemparetureChange}){
  
        return(
            <fieldset>
                <legend>Enter Temparature in {scaleNames[scale]}: </legend>
                <input 
                type="text" 
                value={tempareture} 
                onChange={(e)=>onTemparetureChange(e,scale)}>
                </input>
            </fieldset>
        )
    }
