import { useState } from "react";



export default function Hello() {
    const[name, setName] = useState('Mike');

    function changeName(){
        const newName = name === 'Mike' ? 'Jain' : 'Mike';
        setName(newName);
    }

    return(
        <div>
            <h1>state</h1>
            <h2 id="name">{name}</h2>
           <button onClick={changeName}>Change</button>
        
        </div>

        );

}