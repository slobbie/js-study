import React, {useState} from 'react';


function App() {
  const [username,setUesrname] = useState('');
  const [password,setPassword] = useState('');

  const onSubmit = () => {
    alert("LOGIN");
  };

   
  return (
    <div className="App">
      <br />
      <input type="text" placeholder="username" value={username} onChange={(e)=> setUesrname(e.target.value)}></input>
      <br />
      <br />
      <input type="text" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
      <br />
      <br />
      <button onClick={onSubmit}>LOGIN</button>
    </div>
  );
}

export default App;
