import stc from "string-to-color";
import styled from "styled-components";

const Stacks = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  min-height: 400px; ;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 2px;
  min-width: 1em;
`;

const CrateWrap = styled.div`
  padding: 4px;
  background: lightgrey;
`;

function Crate({ content }: { content: string }) {
  return <CrateWrap style={{ background: stc(content) }}></CrateWrap>;
}

export function Crates({ crates }: { crates: string[][] }) {
  return (
    <Stacks key={JSON.stringify(crates)}>
      {crates.map((stack, index) => (
        <Stack key={`${JSON.stringify(stack)}-${index}`}>
          {stack.map((crate, index) => (
            <Crate key={`${crate}-${index}`} content={crate} />
          ))}
        </Stack>
      ))}
    </Stacks>
  );
}
