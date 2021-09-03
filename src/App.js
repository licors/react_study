import React, { useState } from 'react';
import { useEffect } from 'react';
import Movie from './components/Movie';

function App() {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
  // movies 변수에 useState 안쓰면 영화 추가 시 값이 갱신이 안됨
  const [movies, setMovies] = useState([
    { title: 'movie1', year: 2001},
    { title: 'movie2', year: 2002},
    { title: 'movie3', year: 2003},
    { title: 'movie4', year: 2004}
  ]);
  // 갱신되었을 때 동작
  useEffect(() => {
    console.log('render');
  });
  // movies.map() 으로 movie 객체 하나씩 호출 가능
  // 자식 컴포넌트에 객체 전달 가능, map 형식이라 key 를 안넣으면 경고발생
  const renderMovies = movies.map(movie => {
    // movie 객체 모두를 자식컴포넌트에서 JSX 형식으로 바꾸어 리턴
    return (
      <Movie movie={movie} key={movie.title}/>
    );
  });
  // 추가 이벤트 발생 시 movies 배열 새로 만들어서 할당
  const addMovie = (event) => {
    event.preventDefault();
    setMovies([
      // 구조분해할당(디스트럭팅)
      ...movies,
      {
        title: movieTitle,
        year: movieYear,
    }]);
    // input 텍스트 값 초기화
    setMovieTitle('');
    setMovieYear('');
  };
  return (
    <div className="App">
      <h1>Movie list</h1>
      <form onSubmit={addMovie}>
        <input
          type="text"
          value={movieTitle}
          placeholder="영화제목"
          onChange={e => setMovieTitle(e.target.value)}
        /><br />
        <input
          type="text"
          value={movieYear}
          placeholder="개봉년도"
          onChange={e => setMovieYear(e.target.value)}
        /><br />
        <button type="submit">영화추가</button>
      </form>
      {renderMovies}
    </div>
  );
}

export default App;
