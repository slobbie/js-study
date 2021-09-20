import React, {useState} from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';
import Navbar from './components/Navbar';
import Users from './pages/Users';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


 
function App() {
  const [movies, setMovies] = useState([]);

const removeMovie = (id) => {
  setMovies(movies.filter(movie =>{
    return movie.id !== id;
  }));

};

  const renderMovies = movies.length ? movies.map(movie => {
    return(
      <Movie 
      movie={movie} 
      key={movie.id} 
      removeMovie={removeMovie}
      />
    );
  }) : '추가된 영화가 없습니다.';

  const addMovie = (movie) => {
    setMovies([
      ...movies,
        // ...movies <- 구조분해할당 영어로 디스트럭션 
      movie
    ]);
  };
  
  return (
    <Router>
      <div className="App"> 
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/movies">
              <h1>movie list</h1>
              <MovieForm addMovie={addMovie}/>
              {renderMovies}  
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <h1>Home</h1>
            </Route>
          </Switch>   
        </div>
      </div>
    </Router>
  );
} 

export default App;
