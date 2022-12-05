import Day1 from "../Days/1"
import {useParams} from 'react-router-dom'

export default function DayPage(){


    const {day} = useParams()

    switch(day){

        case "1":
            return  <Day1/>;
        default:
            return <pre>I haven't answered this day yet! </pre>

    }


}