import React, { useEffect, useState } from "react";
import { day1part1Solution, day1part2Solution } from "./solution";

export default function Day1() {
  const [text, setText] = useState<string>("");
  const [part1, setPart1] = useState<number>(0);
  const [part2, setPart2] = useState<number>(0);

  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    setText(value);
  };

  useEffect(() => {
    try {
      setPart1(day1part1Solution(text));
      setPart2(day1part2Solution(text));
    } catch (e: unknown) {
      console.error(e);
      const message = (e as Error).message;
      setError(message);
    }
  }, [text]);

  return (
    <div>
      <h1>Day 1 - Part 1</h1>
      <textarea onChange={handleChange} />
      <pre>Most calories: {part1}</pre>
      <h1>Day 1 - Part 2</h1>
      <pre>Top 3 calories: {part2}</pre>

      <pre>{error}</pre>
    </div>
  );
}
