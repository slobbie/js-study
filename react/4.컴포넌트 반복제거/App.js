import React, { useState } from 'react';
import Counter from './components/Counter';


function App() {
  // const [count, setCount] = useState(0);
  // const [count1, setCount1] = useState(0);
  // const [count2, setCount2] = useState(0);
  // const increment = () => {
  //   setCount(count + 1);
  // };
  // const increment1 = () => {
  //   setCount1(count1 + 1);
  // };
  // const increment2 = () => {
  //   setCount2(count2 + 1);
  // };

  return (
    <div className="App">
      <h1>sun coder</h1>
      <br />
      <br />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
