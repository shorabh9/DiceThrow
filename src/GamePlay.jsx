import Rules from "./Rules";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import { useState } from "react";
import styles from "./Media.module.css";


const GamePlay = () => {
const resetScore = () => {
    setScore(0);
}
  const [score ,setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const[selectedNumber , setSelectedNumber] = useState();
  const[error , setError] = useState("");
  const[rules ,setRules] = useState(false);

 const generateRandomNumber = (min , max) => {
       
        return Math.floor(Math.random() * (max - min) + min);
    };
    
    const roleDice = () => {
       if(!selectedNumber) {

        setError("You have not selected any number");
        return;
       };
       setError("");
        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice((prev) => randomNumber);
      
        if (selectedNumber === randomNumber) {
          setScore((prev) => prev + randomNumber);
        }
    
        else
        {
          setScore((prev) => prev - 2);
        }
        setSelectedNumber(undefined);
    }

   
  return (
   <div className="">
    <div className={` flex justify-around pt-[70px] ${styles.total}`}>
      
      <TotalScore score={score}/>
      <NumberSelector  setError={setError}
      error = {error}
       selectedNumber={selectedNumber}
      setSelectedNumber={setSelectedNumber}/>
  
    </div>
    <RoleDice currentDice={currentDice}
    roleDice={roleDice} />
     <div className=" flex justify-center items-center ">
    <div className="">
         <button onClick={resetScore} className=" hover:border-none cursor-pointer border-[1px] border-black mt-[20px] flex justify-center items-center hover:bg-black hover:text-white rounded-[2px] w-[150px]  h-[30px] ">Reset Score</button>
         <button onClick = {() => setRules((prev) => !prev)}   className=" hover:border-[1px] hover:border-black cursor-pointer  mt-[15px] flex justify-center items-center text-white bg-black hover:bg-white hover:text-black rounded-[2px] w-[150px]  h-[30px] ">{rules ? "Hide" : "Show"} Show Rules</button>
    </div>
    </div>  
    {rules && <Rules/> }
  </div>
  
  )
};

export default GamePlay;

