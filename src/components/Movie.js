import React from 'react';

// props. 으로 앞에 붙이기 싫고, 객체로 바로 받고싶다면 {객체} 로 받는다.
const Movie = ({ movie }) => {
    // JSX 형식으로 리턴
    return (
        <div className="movie">
            <div className="movie-title">{movie.title}</div>
            <div className="movie-year">{movie.year}</div>
        </div>
    );
};

export default Movie;
