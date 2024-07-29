import styles from "./Media.module.css";


const StartGame = ({toggle}) => {
  return (
    <div className={`items-center  h-[100vh] max-w-[1180px] flex mx-auto my-0 ${styles.start}`}>

        <div className="">
        <img className={styles.img} src="/src/dices.png"/>
        </div>
        <div className={styles.div2}>
            <h1 className= { ` whitespace-nowrap font-bold ${styles.dice}`}>Dice Game</h1>
            <button onClick={toggle} className={`hover:border hover:border-black hover:text-black hover:bg-white text-[16px] border-transparent   pt-[10px] pb-[10px] pl-[18px] pr-[18px]  bg-black text-white rounded-[5px] hover:duration-300 hover:ease-in duration-500 ease-in ${styles.btn}`}>Play Now</button>
        </div>
    </div>
  )
}

export default StartGame;