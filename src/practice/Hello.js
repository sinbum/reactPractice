export default function Hello() {
    function showName(){
        console.log ('mike');
    }

    function showAge(age) {
        console.log(age);
    }

    function showText(txt) {
        console.log(txt)
    }

    return(
        <div>
            <h1>state</h1>
            <h2>컴포넌트의 속성값            </h2>
            <button onClick={showName}> Show name </button>       
            <button onClick={()=>{showAge(10)}}> show Age</button>
            <input type="text" onChange={e=>{const txt = e.target.value; showText(txt)}} />
        
        
        
        </div>

        )

}