import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./hooks/useFetch"

export default function CreateWord(){
const days = useFetch("http://localhost:3001/days");
const history = useHistory();
const [isLoading, setIsLoading] = useState(false);

function onSubmit(e){
    e.preventDefault();
    
    if(!isLoading){
        setIsLoading(true);
    

    // console.log(engRef.current.value);
    // console.log(korRef.current.value);
    // console.log(dayRef.current.value);
    
    fetch(`http://localhost:3001/words/`,{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            day : dayRef.current.value,
            eng : engRef.current.value,
            kor : korRef.current.value,
            isDone : false
        }),
    }).then(res => {
        if(res.ok){
            alert('생성이 완료되었습니다.')
            //<Link To 처럼 이벤트 발생시 페이지전환을 유용하게 사용할 수있다.>
            history.push(`/day/${dayRef.current.value}`)
        }
    })
}

}

//useRef 를 사용하면 
const engRef = useRef(null);
const korRef = useRef(null);
const dayRef = useRef(null);

    return (
    <form onSubmit={onSubmit}>
        <div className="input_area">
            <label>Eng</label>
            <input type="text" placeholder="computer" ref={engRef}/>
        </div>
        <div className="input_area">
            <label type="text">Kor</label>
            <input type='text' placeholder="컴퓨터" ref={korRef}/>
        </div>
        <div className="input_area">
            <label>day</label>
            <select ref={dayRef}>
            {days.map(day => (
                <option key={day.id} value={day.day} >
                    {day.day}
                    </option>                
            ))}
            </select>
        </div>
        <button style={
               { opacity: isLoading ? 0.3 : 1,}
            }>
            

            {isLoading ? "Saving..." : "저장"}
            </button>

    </form>)
}