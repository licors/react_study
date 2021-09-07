import React from 'react';
import Navbar from './components/Navbar';
import routes from './routes';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            {routes.map(route => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  exact
                >
                  <route.component />
                </Route>
              )
            })}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// 함수 정의시 화살표함수 사용 이유
// 일단 개인적으로 화살표 함수를 선호하기도 하고 리액트 커뮤니티에서도 화살표 함수를 써요~ 화살표 함수를 변수에 담는거죠 근데 함수가 변할리가 없으니깐 const 변수에 담습니다.
// 화살표 함수를 쓰면 좀더 코드가 심플해져요. return 생략도 가능하고.
// 일반 function과 화살표 함수는 거의 비슷한데 this를 function은 bind를 해줘야 하지만 화살표 함수는 컴포넌트 this를 바로 쓸수 있다는 정도가 있습니다
// class 컴포넌트에서는 this 키워드가 많이 사용되는데 hooks에서는 다 function 컴포넌트라 this가 쓰이는 경우가 없어서 function이나 화살표 함수나 둘중 아무거나 써도 상관없을 것 같아요~ (예외가 있으려나..)

export default App;
