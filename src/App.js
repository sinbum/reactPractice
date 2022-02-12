import Day from './practice/Day';
import DayList from './practice/DayList';
import Header from './practice/Header';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
    return (
        // BrowserRouter를 App Div 컴포넌트 전체를 감싼다.
        <BrowserRouter>
            <div className="App">
                <Header/>
                {/* 스위치 내부는 url에 따라 각각 다르게 보여질 것이다. 스위치 외부는 모든 페이지에 공통으로 노출된다. */}

                <Switch>
                  {/* path='/' 첫 페이지를 의미한다. */}
                  <Route exact path="/">
                    <DayList/>
                  </Route>
                  {/* /day에도 '/' 가 포함되어있기때문에 DayList가 나온다. 따라서 위 Route컴포넌트에 exact 옵션을 추가해준다. */}
                  {/* uri 에서 파라미터 값을 얻을 수 있다. 즉 컾모넌트 내에서 사용할수있다. 아래와 같이 ':' 콜론을 넣어 줄경우에. 한함. */}
                  <Route path="/day/:day">
                    <Day/>                    
                  </Route>
                </Switch>

            </div>
        </BrowserRouter>
    );
}

export default App;
