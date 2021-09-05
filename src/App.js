import React, { useState } from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm'
// bootstrap cdn 에서 navi 폼 추가
import Navbar from './components/Navbar';
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
            <h1>User</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
