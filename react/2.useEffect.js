import React, {useEffect, useState} from 'react';


function App() {
  const [count, setCount] = useState(0);
  const [sun, setSun] = useState(0);
  useEffect(()=>{
    console.log(count)
  }, [count, sun])

  useEffect(() => {
    console.log('first rendering')
  }, []);

  const increment = () => {
    setCount(count + 1);
  };
  
  

  // useEffect에서 []를 넣어주면 한번만 실행되고 그후엔 실행되지 않는다
  return (
    <div className="App">
      <h1>sun coder</h1>
      <br />
      <br />
      <button onClick={increment}>click</button>
      <button onClick={()=> setSun(sun + 1)}>click1</button>

    </div>
  );
}

export default App;
