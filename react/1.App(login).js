import React, {useState} from 'react';


function App() {
  const [username,setUesrname] = useState('');
  const [password,setPassword] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
  };

   
  return (
    <div className="App">
      <form onSubmit={onsubmit}>
        <br />
        <input type="text" placeholder="username" value={username} onChange={(e)=> setUesrname(e.target.value)}></input>
        <br />
        <br />
        <input type="text" placeholder="password" value={password} onChange={(e)=> setPassword(e.target.value)}></input>
        <br />
        <br />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}

export default App;
