import React, { useState } from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm'

function App() {
  const [movies, setMovies] = useState([
    { title: 'movie1', year: 2001 },
    { title: 'movie2', year: 2002 },
    { title: 'movie3', year: 2003 },
    { title: 'movie4', year: 2004 }
  ]);

  const renderMovies = movies.map(movie => {
    return (
      <Movie movie={movie} key={movie.title} />
    );
  });

  const addMovie = (movie) => {
    setMovies([
      ...movies,
      movie
    ]);
  };
  return (
    <div className="App">
      <h1>Movie list</h1>
      {/* 자식 컴포넌트에 함수 전달하여 부모 컴포넌트 useState 조작 */}
      <MovieForm addMovie={addMovie} />
      {renderMovies}
    </div>
  );
}

export default App;
