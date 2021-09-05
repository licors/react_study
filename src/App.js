import React, { useState } from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm'
// bootstrap cdn 에서 navi 폼 추가
import Navbar from './components/Navbar';
import Users from './pages/Users.js';
// react router dom 기능 추가
// npm install react-router-dom
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState([]);

  const removeMovie = (id) => {
    setMovies(movies.filter(movie => {
      return movie.id !== id;
    }))
  }

  const renderMovies = movies.length ? movies.map(movie => {
    return (
      <Movie
        movie={movie}
        key={movie.id}
        removeMovie={removeMovie} />
    );
  }) : '추가된 영화가 없습니다.';

  const addMovie = (movie) => {
    setMovies([
      ...movies,
      movie
    ]);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Switch 는 아래 Route 중 path 가 일치하는 첫 번째 것만 선택한다. */}
        <Switch>
          <Route path="/movies">
            <h1>Movie list</h1>
            <MovieForm addMovie={addMovie} />
            {renderMovies}
          </Route>
          {/* Route path 는 / 기준으로 적용시킨다. 아래 / 와 /users 는 같은 단위이므로 exact
          가 없다면 홈과 유저가 둘 다 나오게 된다.
          /user/a  /user 로 한 경우에도 마찬가지로 둘 다 나온다.
          /users   /user 는 하나만 나온다. */}
          <Route path="/" exact>
            <h1>Home</h1>
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
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
