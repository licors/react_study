import React, { useState } from 'react';

// props 를 이용해 부모 컴포넌트에서 보낸 데이터를 받을 수 있다.
const Counter = (props) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
	// 부모에서 click 이라고 보내서 props.click
	// props.click 이 있으면 사용하고 없으면 'Click' 값 들어감
    const clickString = props.click || 'Click';
    return (
        <button onClick={increment}>
            {clickString} {count}
        </button>
    );
};

export default Counter;
