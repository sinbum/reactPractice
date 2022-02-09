import React, { useState } from 'react'
import './App.css';
import { useDispatch, useSelector } from 'react-redux'

//import logo from 'logo.svg';


function App() {
  
  // var [a,b] = [10, 100];
  //useState로 만들어놓은 데이터는 state가 변경시html이 자동으로 재렌더링이 된다.
  //state로 만든 변수들은 그냥 변경이 안된다. 따로 변경이 가능하다.
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','신발 머스트 아이템']);

  //따봉변경() 를 사용해서 따봉을 바꾼다. 
  let [따봉,따봉변경] = useState(0);
  
  //let posts = '강남 고기 맛집';

  function 함수(){
    return 100
  }

  function 제목바꾸기(){
    //changedTitle(['여자 코트 추천','강남 우동 맛집','신발 머스트 아이템']);
    //복사본 생성 DeepCopy를 해야한다. 값공유가 아니다.
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    //newArray.sort();
    글제목변경( newArray );

  }


  return (
    <div className = "App">
      <div className = "black-nav">
        <div>개발 Blog</div>
      </div>
      {/* 데이터 바인딩 방식 아래와 같이 변수명을 입력. */}   

      <button onClick={()=>{ 제목바꾸기() }}>버튼</button>

      <div className = "list">
        <h4>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
        <p>2월 9일 발행</p> 
        <hr/> 
      </div> 

      <div className = "list">
        <h4>{글제목[1]}</h4>
        <p>2월 9일 발행</p>  
        <hr/>
      </div>   

      <div className = "list">
        <h4>{글제목[2]}</h4>
        <p>2월 9일 발행</p>  
        <hr/>
      </div>  

      <Modal/>
      {/* <h3>{ 함수() }</h3> */}

      {/* <img src = { logo }></img> */}


      
      

    </div>
  );

}


//Component 만드는 법
// 1. 함수 만드로 깅름짓고,
// 2. 축약을 원하는 HTML에 넣고,
// 3. 원하는곳에서 <함수명/>

//소문자로 만들면 렌더링이 되지 않는다.
function Modal() {

  const 꺼내온거 = useSelector((state) => state);
  const dispatch = useDispatch()

  return (
    <>
      <div className="modal">
        <h2>redux 라이브러리를 사용한 값 가져오기</h2>
        {/* <h2>글제목[0]</h2>  위와 같이 app함수 내에서 바인딩 처리된 글제목을 
                or
            타 컴포넌트를 가져올시에는 prop함수를 적용하여 내려받거나 쉽게 이용하가능한 라이브러리를 적용해야한다.
            이때 사용하는 것이 React Redux(리덕스) 이다.
      
        
        */}
        <p>날짜</p>
        <p>상세내용 : { 꺼내온거 }</p>
        <button onClick={ () => { dispatch ({type : '증가'}) }}>증가</button>
        <button onClick={ () => { dispatch ({type : '감소'}) }}>감소</button>
      </div>
    </>
  );
}

export default App;
