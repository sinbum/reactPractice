// 화면상의 리스트에서 특정 날짜를 클릭했을때 단어들이 나오는 페이지.
import { Link, useParams } from "react-router-dom";
import Word from "./Word";
import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";

export default function Day() {
    const {day} = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${day}`);
    const days = useFetch('http://localhost:3001/days');
    
    console.log('day' , day);
    console.log('day.length', day);

    return <>
    <h2>Day {day}</h2>
    {words.length === 0 && <span>Loading...</span>}
        <table>
            <tbody>
                {words.map(word => (
                  <Word word={word} key={word.id}></Word>
                ))}
            </tbody>
        </table>

    <p></p>     


    <button hidden={ Number(day) === 1? true : false } > <Link to={`/day/${Number(day)-1}`}> Day {Number(day)-1}보기 </Link></button>
    <span> </span>
    <button hidden={ Number(days.length) === Number(day) ? true : false}> <Link to={`/day/${Number(day)+1}`}> Day {Number(day)+1} 보기 </Link></button>
    

    </>
}