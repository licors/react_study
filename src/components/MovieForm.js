import React, {useState} from 'react';
import InputFeild from './InputField';

const MovieForm = ({ addMovie }) => {
	const [movieTitle, setMovieTitle] = useState('');
	const [movieYear, setMovieYear] = useState('');
	const [titleError, setTitleError] = useState('');
	const [yearError, setYearError] = useState('');

	const resetForm = () => {
		setMovieTitle('');
		setMovieYear('');
	}

	const resetError = () => {
		setTitleError('');
		setYearError('');
	}

	// 간단한 validate, 입력값 없을 때 에러메세지 출력
	const validateForm = () => {
		resetError();
		let validated = true;
		if (!movieTitle) {
			setTitleError('영화제목을 넣어주세요');
			validated = false;
		}
		if (!movieYear) {
			setYearError('개봉년도를 넣어주세요');
			validated = false;
		}
		return validated;
	}

	const onSubmit = (event) => {
		event.preventDefault();
		if (validateForm()) {
			addMovie({
				id : Date.now(),
				title: movieTitle,
				year: movieYear,
			});
			resetError();
			resetForm();
		}
	};
	return (
		<form onSubmit={onSubmit}>
			<InputFeild
				type="text"
				value={movieTitle}
				placeholder="영화제목"
				onChange={e => setMovieTitle(e.target.value)}
				errorMessage={titleError}
			/>
			<InputFeild
				type="number"
				value={movieYear}
				placeholder="개봉년도"
				onChange={e => setMovieYear(e.target.value)}
				errorMessage={yearError}
			/>
			<button type="submit">영화추가</button>
		</form>
	);
}

export default MovieForm;
