import Day1 from "../Days/1";
import { useParams } from "react-router-dom";
import Day2 from "../Days/2";
import Day3 from "../Days/3";
import Day4 from "../Days/4";

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
    default:
      return <pre>I haven't answered this day yet! </pre>;
  }
}
