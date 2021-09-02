import React, { useState, useEffect } from 'react';



function App() {
  const [condition, setCondition] = useState(false);
  const toggle = () => setCondition(!condition);
  useEffect(() =>{
    console.log(condition);
  }, [condition])
  const renderCondition = condition
    ? 'True'
    : 'False'
  return (
    <div className="App">
      <h1>sun coder</h1>
      <div>{renderCondition}</div>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
} 

export default App;
