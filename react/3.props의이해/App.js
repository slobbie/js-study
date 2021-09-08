import React, { useState } from 'react';
import Counter from './components/Counter';


function App() {
 const [buttonName, setbuttonName] = useState('클릭');
 const clickButton = () => {
  setbuttonName('click');
 };
  return (
    <div className="App">
      <h1>sun coder</h1>
      <br />
      <br />
      <Counter click="click1" />
      <Counter click={buttonName}/>
      <Counter />

      <button onClick={clickButton}>{buttonName}</button>
    </div>
  );
} 

export default App;
