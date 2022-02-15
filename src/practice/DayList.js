import {Link} from "react-router-dom"
import useFetch from "./hooks/useFetch";

export default function DayList() {
    //const [days, setDays] = useState([]);
    const days = useFetch('http://localhost:3001/days');

    // if(days.length === 0){
    //     return <span>Loading...</span>
    // }

    return (
    <ul className="list_day">
        {
            days.map(row => (
                // html에서링크를 사요하려면 a태그를 사용하지만 리액트 라우터는 link라는 것을 사용한다.

                <li key={row.id}>
                    {/* <Link to={`/day/${day.day}`}>Day {day.day}</Link> */}

                    {/* 쿼테이션을 사용하지말 ` 1옆에있는 이 따옴표를 사용해야 한다. */}
                    <Link to={`/day/${row.day}`}>Day {row.day}</Link>
                </li>
            ))
        }
    </ul>
  

    )
}