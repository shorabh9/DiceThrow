import styles from "./Media.module.css";

const Rules = () => {
  return (
    <div className=" flex justify-center items-center mt-[40px]">
        <div className={` bg-emerald-400 rounded-[5px]  p-[10px] ${styles.class2}`}>
            <h1 className=" font-bold text-[20px] ">How to play dice game</h1>
            <p className="pt-[15px]">Select the number</p>
            <p>Click on dice image</p>
            <p>after click dice if selected number is equal to dice number you will get same point as dice </p>
            <p>If you get wrong guess then 2 point will be deducted</p>
        </div>
    </div>
  )
}

export default Rules