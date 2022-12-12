import { getMarker, getMessageMarker } from "./solution";

test("getMarker", () => {
  expect(getMarker("bvwbjplbgvbhsrlpgdmjqwftvncz")).toBe(5);
  expect(getMarker("nppdvjthqldpwncqszvftbrmjlhg")).toBe(6);
  expect(getMarker("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg")).toBe(10);
  expect(getMarker("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw")).toBe(11);
});

test("getMessageMarker", () => {
  expect(getMessageMarker("mjqjpqmgbljsphdztnvjfqwrcgsmlb")).toBe(19);
  expect(getMessageMarker("bvwbjplbgvbhsrlpgdmjqwftvncz")).toBe(23);
  expect(getMessageMarker("nppdvjthqldpwncqszvftbrmjlhg")).toBe(23);
  expect(getMessageMarker("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg")).toBe(29);
  expect(getMessageMarker("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw")).toBe(26);
});
