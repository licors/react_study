import React from 'react';

// props. 으로 앞에 붙이기 싫고, 객체로 바로 받고싶다면 {객체} 로 받는다.
const Movie = ({ movie, removeMovie }) => {
    // JSX 형식으로 리턴
    return (
        <div className="movie">
            <div className="movie-title">
                {movie.title}
                <span className="movie-year">
                    ({movie.year})
                </span>
            </div>
            <div>
                <button onClick={() => removeMovie(movie.id)}>
                    삭제
                </button>
            </div>
        </div>
    );
};

export default Movie;
