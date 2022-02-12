import React from "react";
import JsonTempData from "../../data/JsonTempData.json"



//  function jsondata (JsonTempData){
//      console.log('data',JsonTempData)
//      return JsonTempData
//  } 
//const dataA = {"this":"json"}



const Section = () => {
    // console.log(JsonTempData);
    
    return (

        //엑셀파일. 화면에 뿌려주는 역할
        <div>
            <button onClick={jsondata}>실행하기</button>
            {/* <button >실행하기</button> */}
        </div>
    );
}

 function jsondata (){   
     //console.log(JsonTempData)

     JsonTempData.list.forEach(row => console.log(row))

     return JsonTempData
 } 
 

export default Section