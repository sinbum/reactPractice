import {useEffect, useState} from "react";
import {Link} from "react-router-dom"

export default function DayList() {
    const [days, setDays] = useState([]);
    //console.log(dummy)
    const [count, setCount] = useState(0);

    function onclick(){
        setCount(count + 1);
    }

    function onclick2(){
        setDays([
            ...days,
            {
                id: Math.random(),
                day: 1,
            }]
        );
    }

    useEffect(() => {
        console.log('change');
    }, []); //렌더링 직후 딱 한번만 실행하는것은 빈배열을 전달하면 된다.



    return (<>
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
    <button onClick={onclick}>{count}</button>
    <button onClick={onclick2}>Day Change</button>

    </>)
}