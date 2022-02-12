import dummy from "./data/data.json"

export default function DayList(){

    console.log(dummy)

    return <ul className="list_day">
        {dummy.days.map(row => (

            <li key = {row.id}>Day {row.day}</li>
        ))

        }
    </ul>
}