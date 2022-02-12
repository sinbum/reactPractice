import './App.css';
import Section from './pages/body/section';
import Hello from './practice/Hello';

function App() {
  return (
    <div className="App">
     
    
      {/* 컴포넌트를 만들고 재사용 할경우 각각의 컴포넌트의 상태값들은 같이 변하지 않음을 인지하고 있어야한다. */}
       <Hello></Hello>      
       <Hello></Hello>
       <Hello></Hello>


       
    </div>
  );
}



export default App;
