import Day1 from "../Days/1";
import { useParams } from "react-router-dom";
import Day2 from "../Days/2";
import Day3 from "../Days/3";
import Day4 from "../Days/4";
import Day5 from "../Days/5";
import Day6 from "../Days/6";

export default function DayPage() {
  const { day } = useParams();

  switch (day) {
    case "1":
      return <Day1 />;
    case "2":
      return <Day2 />;
    case "3":
      return <Day3 />;
    case "4":
      return <Day4 />;
    case "5":
      return <Day5 />;
    case "6":
      return <Day6 />;
    default:
      return <pre>I haven't answered this day yet! </pre>;
  }
}
