import {Link} from 'react-router-dom'

export default function IndexPage(){

    const days = new Array(25).fill("");

    return <div>
        <h1>AOC 2022</h1>
        <ul >{days.map((day,index)=><li key={index}><Link  to={`/day/${index+1}`}>Day {index+1}</Link></li>)}</ul>
    </div>



}