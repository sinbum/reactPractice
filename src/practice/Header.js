import { Link, useHistory } from "react-router-dom"
import CreateDay from "./CreateDay"
import useFetch from "./hooks/useFetch";

export default function Header(){

    return <div className='header'>
<h1>
    {/* 링크의 사용. */}
    {/* <a href="/">토익 영단어 (고급)</a> */}
    <Link to = "/">토익 영단어 (고급)</Link>
</h1>
<div className= "menu">
    
    <Link to = "/create_word" className="link">
        단어 추가
    </Link>
    
    <Link to = "/create_day" className="link">
        day 추가    
    </Link>
    
</div>


    </div>
}