import styles from "./Media.module.css";

const TotalScore = ({score}) => {
  return (
    <div className=" text-center max-w-[180px]  ">
        <h1 className={`font-bold text-[70px] leading-[60px] ${styles.score}`}> {score} </h1>
        <p className=" text-[24px] font-bold  ">Total Score</p>
    </div>
  )
}

export default TotalScore;