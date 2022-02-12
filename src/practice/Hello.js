import { useState } from "react";



export default function Hello() {
    const[name, setName] = useState('Mike');


    return(
        <div>
            <h1>state</h1>
            <h2 id="name">{name}</h2>
           <button onClick={()=>{
                 const newName = name === 'Mike' ? 'Jain' : 'Mike';
                 setName(newName);
           }}>Change</button>
        
        </div>

        );

}