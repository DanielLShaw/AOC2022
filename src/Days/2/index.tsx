import React, { useEffect, useState } from "react";
import {
  cheatAtRPSTournement,
  playRPSTournament,
  processInput
} from "./solution";

export default function Day2() {
  const [input, setInput] = useState("");
  const [part1, setPart1] = useState(0);
  const [part2, setPart2] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInput(value);
  };

  useEffect(() => {
    const moveList = processInput(input);
    const part1Score = playRPSTournament(moveList);
    setPart1(part1Score);

    const part2Score = cheatAtRPSTournement(moveList);
    setPart2(part2Score);
  }, [input]);
  return (
    <div>
      <h1>Day 2 - part 1</h1>
      <textarea onChange={handleChange} />
      <pre>Score: {part1}</pre>

      <h1>Day 2 - part 2</h1>
      <pre>Score: {part2}</pre>
    </div>
  );
}
