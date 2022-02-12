// 화면상의 리스트에서 특정 날짜를 클릭했을때 단어들이 나오는 페이지.

import dummy from "./data/data.json"

export default function Day() {
const day = 1;

//더미데이터를 가지고 단어의 날짜가 1인것만 출력할 수 있도록 filter를 사용.
const wordList = dummy.words.filter(word => (word.day === day));

console.log(wordList)

    return <>
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