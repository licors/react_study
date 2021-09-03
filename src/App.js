import React, { useState } from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm'

function App() {
  const [movies, setMovies] = useState([]);

  const removeMovie = (id) => {
    // 이터레이터를 이용해 삭제된 항목 제거시킨 후 removeMovie 에 넣음
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
    <div className="App">
      <h1>Movie list</h1>
      <MovieForm addMovie={addMovie} />
      {renderMovies}
    </div>
  );
}

export default App;
