import { useHistory } from "react-router-dom";
import useFetch from "./hooks/useFetch";

export default function CreateDay(){   
    
    const days = useFetch('http://localhost:3001/days');
    const history = useHistory();

    function addDay(){

        if(!window.confirm('날짜를 추가하시겠습니까?')){
            return;
        }

        fetch(`http://localhost:3001/days/`,{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            id : days.length + 1,
            day : days.length + 1,
        }),
    }).then(res => {
        if(res.ok){            
            alert('날짜 추가가 완료되었습니다.');
            history.push('/');
        }
    })    
    };

    return <div>
        <h3>현재 일수 : {days.length}</h3>
        <button onClick={addDay}>day 추가</button>

    </div>;
    
}