import React from 'react';
import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [buttonName, setButtonName] = useState('클릭');
  const clickButton = () => {
    setButtonName('click');
  };
  return (
    <div className="App">
      <h1>Kossie Coder</h1>
      {/* 자식 컴포넌트에 속성값으로 데이터 보내기 */}
      <Counter click="click1" />
      <Counter click={buttonName} />
      <Counter />
      <button onClick={clickButton}>Click</button>
    </div>
  );
}

export default App;
