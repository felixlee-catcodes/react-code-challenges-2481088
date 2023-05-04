import { useEffect, useState } from "react";

export default function ScoreKeeper() {
  //useState grabs the score stored/persisting in local storage and uses that as its inital state
  const [score, setScore] = useState(
    //if no score is being stored in local storage, then display 0 as the score
    parseInt(localStorage.getItem("score")) || 0
  );

  useEffect(() => {
    localStorage.setItem("score", score);
    console.log("current score: ", score);
  }, [score]);

  return (
    <div>
      <h1>Your score is: {score}</h1>
      <button onClick={() => setScore((prevScore) => prevScore + 1)}>+</button>
      <button onClick={() => setScore((prevScore) => prevScore - 1)}>-</button>
      <button onClick={() => setScore(0)}>Reset Score</button>
    </div>
  );
}
