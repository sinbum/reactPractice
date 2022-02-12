// 화면상의 리스트에서 특정 날짜를 클릭했을때 단어들이 나오는 페이지.
import dummy from "./data/data.json";
import { useParams } from "react-router-dom";

export default function Day() {



//useParams를 이용하면 api 의 정보를 변수로 사용 할 수 있다.
//첫번째 방법
//const { day } = useParams();

//두번째 방법
const day = useParams().day;
//console.log(a);

//더미데이터를 가지고 단어의 날짜가 1인것만 출력할 수 있도록 filter를 사용.
const wordList = dummy.words.filter(word => (word.day === Number(day)));

//console.log(wordList)

    return <>
    <h2>Day {day}</h2>
        <table>
            <tbody>
                {wordList.map(word => (
                    <tr key = {word.id}>
                        <td>
                            {word.eng}
                        </td>
                        <td>
                            {word.kor}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    
    </>
}