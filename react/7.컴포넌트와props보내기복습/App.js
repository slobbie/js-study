import React from 'react';
import Movie from './components/Movie';



function App() {
  const movies = [
      {title: 'sun coder1', year: 2019},
      {title: 'sun coder2', year: 2020},
      {title: 'sun coder3', year: 2021},
  ];

  const renderMovies = movies.map(movie => {
    return(
      <Movie movie={movie} key={movie.title} />
    );
  });
 
  return (
    <div className="App"> 
      <h1>movie list</h1>
      {renderMovies} 
    </div>
  );
} 

export default App;
