import React from "react";

const InputFeild = ({
	// props
	type,
	value,
	placeholder,
	onChange,
	errorMessage
}) => {
	return (
		// <React.Fragment> 이 태그는 JSX 리턴 시 <div> 로 감싸야 하는데
		// 렌더링 후 html 에서 div 로 추가로 감싸져 있게됨. 이것을
		// 없애고 싶을 때 사용
		// <> 이런식으로 생략도 가능
		<React.Fragment>
			<input
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
			/><br />
			<div style={{color : 'red'}}>
				{errorMessage}
			</div>
		</React.Fragment>
	);
};

export default InputFeild;
