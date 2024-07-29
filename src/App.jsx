
import { useState } from "react";
import StartGame from "./StartGame";
import GamePlay from "./GamePlay";  // Corrected import

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);  // Corrected state variable name

  const toggleGameplay = () => {
    setIsGameStarted((prev) => !prev);  // Corrected state variable name
  };

  return (
    <> {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGameplay} />}</>
  );
}

 export default App;
