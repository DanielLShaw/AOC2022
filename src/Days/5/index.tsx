import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Crates } from "./Crates";
import { part1Solution, part2Solution } from "./solution";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const Parts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
`;

const Part = styled.div``;

export default function Day5() {
  const [input, setInput] = useState("");
  const [part1, setPart1] = useState(false);
  const [part2, setPart2] = useState(false);

  const [part1Crates, setPart1Crates] = useState([]);
  const [part2Crates, setPart2Crates] = useState([]);

  const [part1Move, setPart1Move] = useState(0);
  const [part2Move, setPart2Move] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setInput(value);
  };

  useEffect(() => {
    part1Solution(input, setPart1Crates, setPart1Move, setPart1);
    part2Solution(input, setPart2Crates, setPart2Move, setPart2);
  }, [input]);

  return (
    <Wrap>
      <textarea onChange={handleChange} />
      <Parts>
        <Part>
          <h1>Day 5 - part 1</h1>
          <pre>Move: {part1Move}</pre>
          <pre>Top crates: {part1}</pre>
          <Crates crates={part1Crates} />
        </Part>
        <Part>
          {" "}
          <h1>Day 5 - part 2</h1>
          <pre>Move: {part2Move}</pre>
          <pre>Top crates: {part2}</pre>
          <Crates crates={part2Crates} />
        </Part>
      </Parts>
    </Wrap>
  );
}
