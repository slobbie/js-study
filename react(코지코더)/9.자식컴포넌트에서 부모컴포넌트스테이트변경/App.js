import React, {useState} from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';



function App() {
  const [movies, setMovies] = useState([
    {title: 'sun coder1', year: 2019},
    {title: 'sun coder2', year: 2020},
    {title: 'sun coder3', year: 2021},
]);

  const renderMovies = movies.map(movie => {
    return(
      <Movie movie={movie} key={movie.title} />
    );
  });

  const addMovie = (movie) => {
    setMovies([
      ...movies,
        // ...movies <- 구조분해할당 영어로 디스트럭션 
      movie
    ]);
  };
  
  return (
    <div className="App"> 
      <h1>movie list</h1>
      <MovieForm addMovie={addMovie}/>
      {renderMovies}  
    </div>
  );
} 

export default App;
