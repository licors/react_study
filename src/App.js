import React, {useState } from 'react';

function App() {
  const [text, setText] = useState('test1');
  const onSubmit = () => {
    alert('submitted');
  }

  const onKeyUp = (event) => {
    if (event.keyCode === 13)
      onSubmit();
  }

  const updateText = () => {
    setText('coder');
    console.log(text);
  }

  return (
    <div className="App">
      <input onKeyUp={onKeyUp}/>
      <button onClick={onSubmit}>Submit</button>
      <br /> <br />

      <span>{text}</span>
      <button onClick={updateText}>Update</button>
    </div>
  );
}

export default App;
