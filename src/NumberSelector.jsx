
import { Container } from "postcss";
import { useState } from "react";
import styled from "styled-components";


const NumberSelector = ({setError,error,selectedNumber,setSelectedNumber}) => {
    const arrNumber = [1,2,3,4,5,6];

    const numberSelectorHandler = (value) => {
      setSelectedNumber(value);
      setError("");
    }
    

    console.log(selectedNumber);
  return (
    <div className="">
      <p className="pb-[10px] text-red-700" >{error}</p>
    <div className=" flex gap-[10px]">
        {
            arrNumber.map((value,i) => (
                <Box 
                isSelected = {value=== selectedNumber}
                onClick={ () => numberSelectorHandler(value)} key={i} className=" cursor-pointer flex justify-center items-center text-[22px] h-[40px] w-[40px] border-[1px] border-black ">{value}</Box>   
            ))
        }
    </div>
    <p className=" flex justify-end pt-[5px]">Select Number</p>
   
    </div>
  )
}

export default NumberSelector;

const Box = styled.div`
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")}
`;

