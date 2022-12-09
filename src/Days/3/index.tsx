import React, { useEffect, useState } from "react";
import { part1Solution, part2Solution } from "./solution";

export default function Day3() {
  const [input, setInput] = useState("");
  const [part1, setPart1] = useState(0);
  const [part2, setPart2] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInput(value);
  };

  useEffect(() => {
    const part1Score = part1Solution(input);
    setPart1(part1Score);

    const part2Score = part2Solution(input);
    setPart2(part2Score);
  }, [input]);
  return (
    <div>
      <h1>Day 3 - part 1</h1>
      <textarea onChange={handleChange} />
      <pre>Score: {part1}</pre>

      <h1>Day 3 - part 2</h1>
      <pre>Score: {part2}</pre>
    </div>
  );
}
