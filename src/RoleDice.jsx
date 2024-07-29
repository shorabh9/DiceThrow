import { useState } from "react";
import styles from "./Media.module.css";

const RoleDice = ( {roleDice, currentDice}) => {

   
   
    
  return (
    <div className=" flex flex-col justify-center">
    <div  className=" flex justify-center mt-[48px]" >
        <img onClick={roleDice} className={`w-[150px] cursor-pointer ${styles.class1}`} src={`src/dice_${currentDice}.png`} />
        
       </div> 
       <p className=" flex justify-center">Click on Dice to roll</p>

    </div>
  )
}

export default RoleDice;